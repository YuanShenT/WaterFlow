if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface WaterFlowComponent_Params {
    dataSource?: WaterFlowDataSource;
}
import { CommonConstants as Const } from "@bundle:com.huawei.waterflow/entry/ets/common/constants/CommonConstants";
import { PRODUCTS_DATA } from "@bundle:com.huawei.waterflow/entry/ets/viewmodel/MockData";
import WaterFlowDataSource from "@bundle:com.huawei.waterflow/entry/ets/viewmodel/WaterFlowDataSource";
import type ProductItem from '../viewmodel/ProductItem';
import FlowItemComponent from "@bundle:com.huawei.waterflow/entry/ets/view/FlowItemComponent";
export default class WaterFlowComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__dataSource = new ObservedPropertyObjectPU(new WaterFlowDataSource(PRODUCTS_DATA), this, "dataSource");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: WaterFlowComponent_Params) {
        if (params.dataSource !== undefined) {
            this.dataSource = params.dataSource;
        }
    }
    updateStateVars(params: WaterFlowComponent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__dataSource.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__dataSource.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // 初始化数据源，加载 MockData
    private __dataSource: ObservedPropertyObjectPU<WaterFlowDataSource>;
    get dataSource() {
        return this.__dataSource.get();
    }
    set dataSource(newValue: WaterFlowDataSource) {
        this.__dataSource.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 瀑布流容器
            WaterFlow.create();
            // 瀑布流容器
            WaterFlow.columnsTemplate("1fr 1fr");
            // 瀑布流容器
            WaterFlow.itemConstraintSize({
                minWidth: 0,
                maxWidth: '100%',
                minHeight: 0,
                maxHeight: 'Infinity'
            });
            // 瀑布流容器
            WaterFlow.columnsGap(10);
            // 瀑布流容器
            WaterFlow.rowsGap(10);
            // 瀑布流容器
            WaterFlow.padding({ left: 10, right: 10, bottom: 20 });
            // 瀑布流容器
            WaterFlow.width(Const.FULL_WIDTH);
            // 瀑布流容器
            WaterFlow.height('100%');
        }, WaterFlow);
        {
            const __lazyForEachItemGenFunction = _item => {
                const item = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    FlowItem.create();
                }, FlowItem);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new 
                            // 渲染每一个商品卡片，并把 item 数据传进去
                            FlowItemComponent(this, { item: item }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/WaterFlowComponent.ets", line: 19, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    item: item
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                item: item
                            });
                        }
                    }, { name: "FlowItemComponent" });
                }
                FlowItem.pop();
            };
            const __lazyForEachItemIdFunc = (item: ProductItem) => item.name;
            LazyForEach.create("1", this, this.dataSource, __lazyForEachItemGenFunction, __lazyForEachItemIdFunc);
            // 使用 LazyForEach 进行高性能懒加载
            LazyForEach.pop();
        }
        // 瀑布流容器
        WaterFlow.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
