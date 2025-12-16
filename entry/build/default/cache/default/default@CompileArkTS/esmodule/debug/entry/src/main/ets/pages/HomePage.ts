if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface HomePage_Params {
    topRectHeight?: number;
}
import { CommonConstants as Const } from "@bundle:com.huawei.waterflow/entry/ets/common/constants/CommonConstants";
import ClassifyComponent from "@bundle:com.huawei.waterflow/entry/ets/view/ClassifyComponent";
import SearchComponent from "@bundle:com.huawei.waterflow/entry/ets/view/SearchComponent";
import SwiperComponent from "@bundle:com.huawei.waterflow/entry/ets/view/SwiperComponent";
import WaterFlowComponent from "@bundle:com.huawei.waterflow/entry/ets/view/WaterFlowComponent";
class HomePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__topRectHeight = this.createStorageLink('topRectHeight', 0, "topRectHeight");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: HomePage_Params) {
    }
    updateStateVars(params: HomePage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__topRectHeight.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__topRectHeight.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // 获取系统状态栏高度（用于避让刘海屏/挖孔）
    private __topRectHeight: ObservedPropertyAbstractPU<number>;
    get topRectHeight() {
        return this.__topRectHeight.get();
    }
    set topRectHeight(newValue: number) {
        this.__topRectHeight.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.Top });
            Stack.backgroundColor({ "id": 16777234, "type": 10001, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 1. 背景图片
            Image.create({ "id": 16777290, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            // 1. 背景图片
            Image.width(Const.FULL_WIDTH);
            // 1. 背景图片
            Image.height({ "id": 16777249, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            // 1. 背景图片
            Image.objectFit(ImageFit.Cover);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 2. 主体内容列
            Column.create();
            // 2. 主体内容列
            Column.height('100%');
            // 2. 主体内容列
            Column.padding({
                left: { "id": 16777247, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" },
                right: { "id": 16777248, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" },
                // 顶部避让系统状态栏
                top: this.getUIContext().px2vp(this.topRectHeight)
            });
        }, Column);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // 搜索栏
                    SearchComponent(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/HomePage.ets", line: 34, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SearchComponent" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // 分类栏
                    ClassifyComponent(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/HomePage.ets", line: 37, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "ClassifyComponent" });
        }
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // 轮播图
                    SwiperComponent(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/HomePage.ets", line: 40, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "SwiperComponent" });
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            __Common__.create();
            __Common__.layoutWeight(1);
        }, __Common__);
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new 
                    // 瀑布流组件
                    // 【重要】添加 .layoutWeight(1) 让它自动占满剩余高度，否则无法滚动
                    WaterFlowComponent(this, {}, undefined, elmtId, () => { }, { page: "entry/src/main/ets/pages/HomePage.ets", line: 44, col: 9 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "WaterFlowComponent" });
        }
        __Common__.pop();
        // 2. 主体内容列
        Column.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "HomePage";
    }
}
registerNamedRoute(() => new HomePage(undefined, {}), "", { bundleName: "com.huawei.waterflow", moduleName: "entry", pagePath: "pages/HomePage", pageFullPath: "entry/src/main/ets/pages/HomePage", integratedHsp: "false", moduleType: "followWithHap" });
