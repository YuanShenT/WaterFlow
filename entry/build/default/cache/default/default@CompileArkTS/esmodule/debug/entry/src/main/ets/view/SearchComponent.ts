if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface SearchComponent_Params {
}
import { CommonConstants as Const } from "@bundle:com.huawei.waterflow/entry/ets/common/constants/CommonConstants";
export default class SearchComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: SearchComponent_Params) {
    }
    updateStateVars(params: SearchComponent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width(Const.FULL_WIDTH);
            Row.height({ "id": 16777275, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Row.borderRadius({ "id": 16777274, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Row.backgroundColor(Color.White);
            Row.margin({ top: { "id": 16777273, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" } });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777302, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Image.width({ "id": 16777276, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Image.height({ "id": 16777270, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Image.margin({
                left: { "id": 16777271, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" },
                right: { "id": 16777272, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }
            });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create({ "id": 16777224, "type": 10003, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Text.fontSize({ "id": 16777277, "type": 10002, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Text.fontColor(Color.Black);
            Text.opacity(Const.SIXTY_OPACITY);
            Text.fontWeight(FontWeight.Normal);
        }, Text);
        Text.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
