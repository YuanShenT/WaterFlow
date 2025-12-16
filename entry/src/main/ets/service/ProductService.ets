import relationalStore from '@ohos.data.relationalStore';
import common from '@ohos.app.ability.common';
import ProductItem from '../viewmodel/ProductItem';
import Logger from '../common/utils/Logger'; // 建议引入 Logger，如果没有就用 console

export interface RawProductData {
  name: string;
  price: string;
  imageKey: string;
  discount: string;
  promotion: string;
  bonus_points: string;
  description: string;
  detailImageKeys: string[];
}

const LOCAL_IMAGES: Record<string, Resource> = {
  'ic_holder_50e': $r('app.media.ic_holder_50e'),
  'ic_holder_xs2': $r('app.media.ic_holder_xs2'),
  'ic_holder_computer': $r('app.media.ic_holder_computer'),
  'ic_holder_mouse': $r('app.media.ic_holder_mouse'),
  'ic_holder_pad': $r('app.media.ic_holder_pad'),
  'ic_holder_mate50': $r('app.media.ic_holder_mate50'),
  'ic_holder_60pro': $r('app.media.ic_holder_60pro'),
  'loading': $r('app.media.loading'),
  'ic_app_background': $r('app.media.ic_app_background')
};

const SQL_CREATE_TABLE = `CREATE TABLE IF NOT EXISTS PRODUCT (
  ID INTEGER PRIMARY KEY AUTOINCREMENT,
  NAME TEXT,
  PRICE TEXT,
  IMAGE_KEY TEXT,
  DISCOUNT TEXT,
  PROMOTION TEXT,
  BONUS_POINTS TEXT,
  DESCRIPTION TEXT,
  DETAIL_IMAGES TEXT
)`;

const STORE_CONFIG: relationalStore.StoreConfig = {
  name: 'Shop.db',
  securityLevel: relationalStore.SecurityLevel.S1
};

class ProductService {
  private static instance: ProductService;
  private rdbStore: relationalStore.RdbStore | null = null;
  private readonly TABLE_NAME = 'PRODUCT';

  private constructor() {
  }

  public static getInstance(): ProductService {
    if (!ProductService.instance) {
      ProductService.instance = new ProductService();
    }
    return ProductService.instance;
  }

  public async initDB(context: common.UIAbilityContext): Promise<void> {
    try {
      this.rdbStore = await relationalStore.getRdbStore(context, STORE_CONFIG);
      if (this.rdbStore) {
        await this.rdbStore.executeSql(SQL_CREATE_TABLE);
      }
    } catch (err) {
      console.error('initDB failed', JSON.stringify(err));
    }
  }

  public async saveInitialData(rawData: RawProductData[]): Promise<void> {
    if (!this.rdbStore) return;
    try {
      let predicates = new relationalStore.RdbPredicates(this.TABLE_NAME);
      let resultSet = await this.rdbStore.query(predicates);

      // ✅ 修复：处理 resultSet 可能的异常
      try {
        if (resultSet.rowCount > 0) {
          resultSet.close();
          return;
        }
      } catch (e) {
        console.error('Check rowCount failed');
      } finally {
        // 确保关闭
        if (resultSet && !resultSet.isClosed) {
          resultSet.close();
        }
      }

      this.rdbStore.beginTransaction();
      for (const item of rawData) {
        const valueBucket: relationalStore.ValuesBucket = {
          'NAME': item.name,
          'PRICE': item.price,
          'IMAGE_KEY': item.imageKey,
          'DISCOUNT': item.discount,
          'PROMOTION': item.promotion,
          'BONUS_POINTS': item.bonus_points,
          'DESCRIPTION': item.description,
          'DETAIL_IMAGES': JSON.stringify(item.detailImageKeys)
        };
        await this.rdbStore.insert(this.TABLE_NAME, valueBucket);
      }
      this.rdbStore.commit();
    } catch (e) {
      if (this.rdbStore) {
        try {
          this.rdbStore.rollBack();
        } catch (err) {
          console.error('Rollback failed');
        }
      }
    }
  }

  public async getAllProducts(): Promise<ProductItem[]> {
    if (!this.rdbStore) return [];
    try {
      let predicates = new relationalStore.RdbPredicates(this.TABLE_NAME);
      let resultSet = await this.rdbStore.query(predicates);
      return this.processResultSet(resultSet);
    } catch (err) {
      console.error('getAllProducts failed', err);
      return [];
    }
  }

  public async searchProducts(keyword: string): Promise<ProductItem[]> {
    if (!this.rdbStore) return [];
    try {
      let predicates = new relationalStore.RdbPredicates(this.TABLE_NAME);
      if (keyword?.trim()) {
        predicates.contains('NAME', keyword);
      }
      let resultSet = await this.rdbStore.query(predicates);
      return this.processResultSet(resultSet);
    } catch (err) {
      console.error('searchProducts failed', err);
      return [];
    }
  }

  // ✅ 修复重点：增加 try-catch 处理，消除警告
  private processResultSet(resultSet: relationalStore.ResultSet): ProductItem[] {
    let list: ProductItem[] = [];
    try {
      if (resultSet.rowCount > 0) {
        // goToNextRow 也可能会抛出异常，必须捕获
        while (resultSet.goToNextRow()) {
          list.push(this.convert(resultSet));
        }
      }
    } catch (err) {
      console.error('processResultSet error', JSON.stringify(err));
    } finally {
      // 必须在这里关闭 resultSet
      if (resultSet && !resultSet.isClosed) {
        resultSet.close();
      }
    }
    return list;
  }

  // ✅ 修复重点：增加 try-catch 处理，消除警告
  private convert(resultSet: relationalStore.ResultSet): ProductItem {
    try {
      const key = resultSet.getString(resultSet.getColumnIndex('IMAGE_KEY'));
      const imageSrc = LOCAL_IMAGES[key] ? LOCAL_IMAGES[key] : $r('app.media.loading');

      let detailImages: Resource[] = [];
      try {
        const detailsJson = resultSet.getString(resultSet.getColumnIndex('DETAIL_IMAGES'));
        const detailKeys = JSON.parse(detailsJson) as string[];
        if (detailKeys && detailKeys.length > 0) {
          detailImages = detailKeys.map(k => LOCAL_IMAGES[k] || $r('app.media.loading'));
        }
      } catch (e) {
        detailImages = [];
      }

      return new ProductItem(
        imageSrc,
        resultSet.getString(resultSet.getColumnIndex('NAME')),
        resultSet.getString(resultSet.getColumnIndex('DISCOUNT')),
        resultSet.getString(resultSet.getColumnIndex('PRICE')),
        resultSet.getString(resultSet.getColumnIndex('PROMOTION')),
        resultSet.getString(resultSet.getColumnIndex('BONUS_POINTS')),
        resultSet.getString(resultSet.getColumnIndex('DESCRIPTION')),
        detailImages
      );
    } catch (err) {
      console.error('Convert product item failed', JSON.stringify(err));
      // 如果转换失败，返回一个空的安全对象，防止 Crash
      return new ProductItem($r('app.media.loading'), 'Error Item', '', '', '', '', '', []);
    }
  }
}

export default ProductService.getInstance();