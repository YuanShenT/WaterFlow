if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface WaterFlowComponent_Params {
    bottomRectHeight?: number;
    datasource?: WaterFlowDataSource;
    isDataLoaded?: boolean;
}
import type ProductItem from '../viewmodel/ProductItem';
import { WaterFlowDataSource } from "@bundle:com.huawei.waterflow/entry/ets/viewmodel/WaterFlowDataSource";
import { CommonConstants as Const } from "@bundle:com.huawei.waterflow/entry/ets/common/constants/CommonConstants";
import FlowItemComponent from "@bundle:com.huawei.waterflow/entry/ets/view/FlowItemComponent";
import type common from "@ohos:app.ability.common";
import ProductService from "@bundle:com.huawei.waterflow/entry/ets/service/ProductService";
import { MOCK_PRODUCTS } from "@bundle:com.huawei.waterflow/entry/ets/viewmodel/MockData";
export default class WaterFlowComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__bottomRectHeight = this.createStorageLink('bottomRectHeight', 0, "bottomRectHeight");
        this.datasource = new WaterFlowDataSource();
        this.__isDataLoaded = new ObservedPropertySimplePU(false, this, "isDataLoaded");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: WaterFlowComponent_Params) {
        if (params.datasource !== undefined) {
            this.datasource = params.datasource;
        }
        if (params.isDataLoaded !== undefined) {
            this.isDataLoaded = params.isDataLoaded;
        }
    }
    updateStateVars(params: WaterFlowComponent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__bottomRectHeight.purgeDependencyOnElmtId(rmElmtId);
        this.__isDataLoaded.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__bottomRectHeight.aboutToBeDeleted();
        this.__isDataLoaded.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __bottomRectHeight: ObservedPropertyAbstractPU<number>;
    get bottomRectHeight() {
        return this.__bottomRectHeight.get();
    }
    set bottomRectHeight(newValue: number) {
        this.__bottomRectHeight.set(newValue);
    }
    private datasource: WaterFlowDataSource;
    private __isDataLoaded: ObservedPropertySimplePU<boolean>;
    get isDataLoaded() {
        return this.__isDataLoaded.get();
    }
    set isDataLoaded(newValue: boolean) {
        this.__isDataLoaded.set(newValue);
    }
    async aboutToAppear() {
        let context = getContext(this) as common.UIAbilityContext;
        await ProductService.initDB(context);
        await ProductService.saveInitialData(MOCK_PRODUCTS);
        const products = await ProductService.getAllProducts();
        this.datasource.setDataArray(products);
        this.isDataLoaded = true;
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/WaterFlowComponent.ets(25:5)", "entry");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            If.create();
            if (!this.isDataLoaded) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Column.create();
                        Column.debugLine("entry/src/main/ets/view/WaterFlowComponent.ets(27:9)", "entry");
                        Column.width('100%');
                        Column.height('100%');
                        Column.justifyContent(FlexAlign.Center);
                    }, Column);
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        Text.create("数据加载中...");
                        Text.debugLine("entry/src/main/ets/view/WaterFlowComponent.ets(27:20)", "entry");
                        Text.fontColor(Color.Gray);
                    }, Text);
                    Text.pop();
                    Column.pop();
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        WaterFlow.create({ footer: (): void => this.itemFoot() });
                        WaterFlow.debugLine("entry/src/main/ets/view/WaterFlowComponent.ets(29:9)", "entry");
                        WaterFlow.layoutWeight(Const.WATER_FLOW_LAYOUT_WEIGHT);
                        WaterFlow.columnsTemplate(Const.WATER_FLOW_COLUMNS_TEMPLATE);
                        WaterFlow.columnsGap({ "id": 16777288, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
                        WaterFlow.rowsGap({ "id": 16777291, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
                    }, WaterFlow);
                    {
                        const __lazyForEachItemGenFunction = _item => {
                            const item = _item;
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                FlowItem.create();
                                FlowItem.debugLine("entry/src/main/ets/view/WaterFlowComponent.ets(31:13)", "entry");
                            }, FlowItem);
                            {
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    if (isInitialRender) {
                                        let componentCall = new FlowItemComponent(this, { item: item }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/WaterFlowComponent.ets", line: 31, col: 26 });
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
                        const __lazyForEachItemIdFunc = (item: ProductItem) => JSON.stringify(item);
                        LazyForEach.create("1", this, this.datasource, __lazyForEachItemGenFunction, __lazyForEachItemIdFunc);
                        LazyForEach.pop();
                    }
                    WaterFlow.pop();
                });
            }
        }, If);
        If.pop();
        Column.pop();
    }
    itemFoot(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/WaterFlowComponent.ets(43:5)", "entry");
            Column.margin({ top: { "id": 16777291, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }, bottom: this.getUIContext().px2vp(this.bottomRectHeight) });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777224, "type": 10003, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Text.debugLine("entry/src/main/ets/view/WaterFlowComponent.ets(44:7)", "entry");
            Text.fontColor(Color.Gray);
            Text.fontSize({ "id": 16777249, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Text.width(Const.FULL_WIDTH);
            Text.height({ "id": 16777248, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Text.textAlign(TextAlign.Center);
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
