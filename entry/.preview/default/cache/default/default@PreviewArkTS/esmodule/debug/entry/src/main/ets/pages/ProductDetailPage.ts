if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ProductDetail_Params {
    ProductDetail?: ProductItem;
}
import router from "@ohos:router";
import ProductItem from "@bundle:com.huawei.waterflow/entry/ets/viewmodel/ProductItem";
class ProductDetail extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__ProductDetail = new ObservedPropertyObjectPU(new ProductItem({
            image_url: { "id": 16777293, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" },
            name: '加载中...',
            discount: '',
            price: '',
            promotion: '',
            bonus_points: ''
        }), this, "ProductDetail");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ProductDetail_Params) {
        if (params.ProductDetail !== undefined) {
            this.ProductDetail = params.ProductDetail;
        }
    }
    updateStateVars(params: ProductDetail_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__ProductDetail.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__ProductDetail.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // 定义默认对象
    private __ProductDetail: ObservedPropertyObjectPU<ProductItem>;
    get ProductDetail() {
        return this.__ProductDetail.get();
    }
    set ProductDetail(newValue: ProductItem) {
        this.__ProductDetail.set(newValue);
    }
    // 接收参数（类型断言）
    aboutToAppear() {
        const params = router.getParams();
        if (params) {
            this.ProductDetail = params as ProductItem;
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/pages/ProductDetailPage.ets(30:5)", "entry");
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor(Color.White);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.ProductDetail.image_url);
            Image.debugLine("entry/src/main/ets/pages/ProductDetailPage.ets(31:7)", "entry");
            Image.width('100%');
            Image.height(300);
            Image.objectFit(ImageFit.Contain);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.ProductDetail.name);
            Text.debugLine("entry/src/main/ets/pages/ProductDetailPage.ets(36:7)", "entry");
            Text.fontSize(24);
            Text.fontWeight(FontWeight.Bold);
            Text.margin({ top: 10, bottom: 10 });
            Text.padding({ left: 15, right: 15 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.ProductDetail.price);
            Text.debugLine("entry/src/main/ets/pages/ProductDetailPage.ets(42:7)", "entry");
            Text.fontSize(20);
            Text.fontColor(Color.Blue);
            Text.backgroundColor('#E6F7FF');
            Text.padding(5);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("entry/src/main/ets/pages/ProductDetailPage.ets(48:7)", "entry");
            Row.margin({ top: 10, left: 15 });
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.ProductDetail.promotion);
            Text.debugLine("entry/src/main/ets/pages/ProductDetailPage.ets(49:9)", "entry");
            Text.fontSize(14);
            Text.fontColor(Color.Blue);
            Text.backgroundColor('#E6F7FF');
            Text.padding(5);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.ProductDetail.bonus_points);
            Text.debugLine("entry/src/main/ets/pages/ProductDetailPage.ets(55:9)", "entry");
            Text.fontSize(14);
            Text.fontColor(Color.Gray);
            Text.margin({ left: 10 });
        }, Text);
        Text.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "ProductDetail";
    }
}
registerNamedRoute(() => new ProductDetail(undefined, {}), "", { bundleName: "com.huawei.waterflow", moduleName: "entry", pagePath: "pages/ProductDetailPage", pageFullPath: "entry/src/main/ets/pages/ProductDetailPage", integratedHsp: "false", moduleType: "followWithHap" });
