import ProductItem from './ProductItem';

/**
 * 瀑布流数据源实现 IDataSource 接口
 * 用于 WaterFlow 组件的 LazyForEach 加载
 */
export default class WaterFlowDataSource implements IDataSource {
  private dataArray: ProductItem[] = [];
  private listeners: DataChangeListener[] = [];

  constructor(element: ProductItem[]) {
    this.dataArray = element;
  }

  public totalCount(): number {
    return this.dataArray.length;
  }

  public getData(index: number): ProductItem {
    return this.dataArray[index];
  }

  public addData(index: number, data: ProductItem): void {
    this.dataArray.splice(index, 0, data);
    this.notifyDataAdd(index);
  }

  public pushData(data: ProductItem): void {
    this.dataArray.push(data);
    this.notifyDataAdd(this.dataArray.length - 1);
  }

  registerDataChangeListener(listener: DataChangeListener): void {
    if (this.listeners.indexOf(listener) < 0) {
      this.listeners.push(listener);
    }
  }

  unregisterDataChangeListener(listener: DataChangeListener): void {
    const pos = this.listeners.indexOf(listener);
    if (pos >= 0) {
      this.listeners.splice(pos, 1);
    }
  }

  notifyDataReload(): void {
    this.listeners.forEach(listener => {
      listener.onDataReloaded();
    })
  }

  notifyDataAdd(index: number): void {
    this.listeners.forEach(listener => {
      listener.onDataAdd(index);
    })
  }

  notifyDataChange(index: number): void {
    this.listeners.forEach(listener => {
      listener.onDataChange(index);
    })
  }

  notifyDataDelete(index: number): void {
    this.listeners.forEach(listener => {
      listener.onDataDelete(index);
    })
  }

  notifyDataMove(from: number, to: number): void {
    this.listeners.forEach(listener => {
      listener.onDataMove(from, to);
    })
  }
}