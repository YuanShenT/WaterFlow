import { CommonConstants as Const } from '../common/constants/CommonConstants';
import { PRODUCTS_DATA } from '../viewmodel/MockData'; // 导入数据
import WaterFlowDataSource from '../viewmodel/WaterFlowDataSource'; // 导入数据源
import ProductItem from '../viewmodel/ProductItem'; // 导入模型
import FlowItemComponent from './FlowItemComponent'; // 导入卡片组件

@Component
export default struct WaterFlowComponent {
  // 初始化数据源，加载 MockData
  @State dataSource: WaterFlowDataSource = new WaterFlowDataSource(PRODUCTS_DATA);

  build() {
    // 瀑布流容器
    WaterFlow() {
      // 使用 LazyForEach 进行高性能懒加载
      LazyForEach(this.dataSource, (item: ProductItem) => {
        FlowItem() {
          // 渲染每一个商品卡片，并把 item 数据传进去
          FlowItemComponent({ item: item })
        }
      }, (item: ProductItem) => item.name) // 键值生成器
    }
    .columnsTemplate("1fr 1fr") // 两列布局
    .itemConstraintSize({
      minWidth: 0,
      maxWidth: '100%',
      minHeight: 0,
      maxHeight: 'Infinity'
    })
    .columnsGap(10) // 列间距
    .rowsGap(10)    // 行间距
    .padding({ left: 10, right: 10, bottom: 20 })
    .width(Const.FULL_WIDTH)
    // 关键：高度设为 100% 或在父容器中自适应，否则可能显示不全
    .height('100%')
  }
}