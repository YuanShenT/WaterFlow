if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ProductDetail_Params {
    product?: ProductItem;
}
import router from "@ohos:router";
import ProductItem from "@bundle:com.huawei.waterflow/entry/ets/viewmodel/ProductItem";
class ProductDetail extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__product = new ObservedPropertyObjectPU(new ProductItem({ "id": 16777305, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }, '', '', '', '', '', '', []), this, "product");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ProductDetail_Params) {
        if (params.product !== undefined) {
            this.product = params.product;
        }
    }
    updateStateVars(params: ProductDetail_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__product.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__product.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // 修复点：这里必须填满8个参数，对应 ProductItem 的构造函数
    private __product: ObservedPropertyObjectPU<ProductItem>;
    get product() {
        return this.__product.get();
    }
    set product(newValue: ProductItem) {
        this.__product.set(newValue);
    }
    aboutToAppear() {
        const params = router.getParams();
        if (params) {
            this.product = params as ProductItem;
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Stack.create({ alignContent: Alignment.BottomEnd });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.width('100%');
            Scroll.height('100%');
            Scroll.scrollBar(BarState.Off);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.backgroundColor('#F5F5F5');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 1. 顶部大图
            Stack.create({ alignContent: Alignment.BottomEnd });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.product.image_url);
            Image.width('100%');
            Image.height(350);
            Image.objectFit(ImageFit.Cover);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('1/5');
            Text.fontSize(12);
            Text.fontColor(Color.White);
            Text.backgroundColor('#80000000');
            Text.padding({ left: 10, right: 10, top: 4, bottom: 4 });
            Text.borderRadius(12);
            Text.margin({ right: 16, bottom: 16 });
        }, Text);
        Text.pop();
        // 1. 顶部大图
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 2. 价格与销量
            Column.create();
            // 2. 价格与销量
            Column.padding(16);
            // 2. 价格与销量
            Column.backgroundColor(Color.White);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.alignItems(VerticalAlign.Bottom);
            Row.margin({ bottom: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('¥');
            Text.fontSize(16);
            Text.fontColor('#FF5000');
            Text.baselineOffset(-4);
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.product.price.replace(/[^\d.]/g, ''));
            Text.fontSize(28);
            Text.fontColor('#FF5000');
            Text.fontWeight(FontWeight.Bold);
            Text.margin({ right: 8 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('券后');
            Text.fontSize(12);
            Text.fontColor('#FF5000');
            Text.backgroundColor('#FFE4D0');
            Text.padding({ left: 4, right: 4, top: 1, bottom: 1 });
            Text.borderRadius(2);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('已售 98+');
            Text.fontSize(12);
            Text.fontColor('#999');
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('优惠前 ¥' + (parseFloat(this.product.price.replace(/[^\d.]/g, '') || '0') * 1.2).toFixed(0));
            Text.fontSize(12);
            Text.fontColor('#999');
            Text.decoration({ type: TextDecorationType.LineThrough });
        }, Text);
        Text.pop();
        Row.pop();
        // 2. 价格与销量
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 3. 标题
            Column.create();
            // 3. 标题
            Column.padding({ left: 16, right: 16, bottom: 16 });
            // 3. 标题
            Column.backgroundColor(Color.White);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.product.name);
            Text.fontSize(18);
            Text.fontWeight(FontWeight.Bold);
            Text.maxLines(2);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.lineHeight(24);
            Text.margin({ bottom: 8 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 8 });
            Row.width('100%');
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('极速退款');
            Text.fontSize(10);
            Text.fontColor('#FF0036');
            Text.border({ width: 1, color: '#FF0036' });
            Text.padding(2);
            Text.borderRadius(2);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('包邮');
            Text.fontSize(10);
            Text.fontColor('#FF0036');
            Text.border({ width: 1, color: '#FF0036' });
            Text.padding(2);
            Text.borderRadius(2);
        }, Text);
        Text.pop();
        Row.pop();
        // 3. 标题
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.strokeWidth(8);
            Divider.color('#F5F5F5');
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 4. 详情介绍 (读取新字段 description)
            Column.create();
            // 4. 详情介绍 (读取新字段 description)
            Column.backgroundColor(Color.White);
            // 4. 详情介绍 (读取新字段 description)
            Column.width('100%');
            // 4. 详情介绍 (读取新字段 description)
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.justifyContent(FlexAlign.Center);
            Row.padding(20);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Line.create();
            Line.width(20);
            Line.height(1);
            Line.backgroundColor('#CCC');
        }, Line);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(' 宝贝详情 ');
            Text.fontSize(14);
            Text.fontColor('#999');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Line.create();
            Line.width(20);
            Line.height(1);
            Line.backgroundColor('#CCC');
        }, Line);
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.product.description);
            Text.fontSize(15);
            Text.lineHeight(26);
            Text.fontColor('#333');
            Text.padding(16);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 详情图展示
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const img = _item;
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(img);
                    Image.width('100%');
                    Image.objectFit(ImageFit.Cover);
                    Image.margin({ bottom: 10 });
                }, Image);
            };
            this.forEachUpdateFunction(elmtId, this.product.detailImages, forEachItemGenFunction);
        }, ForEach);
        // 详情图展示
        ForEach.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.height(80);
        }, Blank);
        Blank.pop();
        // 4. 详情介绍 (读取新字段 description)
        Column.pop();
        Column.pop();
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 底部按钮
            Row.create();
            // 底部按钮
            Row.width('100%');
            // 底部按钮
            Row.backgroundColor(Color.White);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('立即购买');
            Button.type(ButtonType.Normal);
            Button.backgroundColor('#FF5000');
            Button.fontColor(Color.White);
            Button.width('100%');
            Button.height(50);
            Button.onClick(() => { console.info('Buy'); });
        }, Button);
        Button.pop();
        // 底部按钮
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 返回按钮
            Row.create();
            // 返回按钮
            Row.width('100%');
            // 返回按钮
            Row.height('100%');
            // 返回按钮
            Row.hitTestBehavior(HitTestMode.Transparent);
            // 返回按钮
            Row.alignItems(VerticalAlign.Top);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('<');
            Button.type(ButtonType.Circle);
            Button.backgroundColor('#80000000');
            Button.fontColor(Color.White);
            Button.fontSize(18);
            Button.width(32);
            Button.height(32);
            Button.margin({ top: 10, left: 16 });
            Button.onClick(() => { router.back(); });
        }, Button);
        Button.pop();
        // 返回按钮
        Row.pop();
        Stack.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "ProductDetail";
    }
}
registerNamedRoute(() => new ProductDetail(undefined, {}), "", { bundleName: "com.huawei.waterflow", moduleName: "entry", pagePath: "pages/ProductDetailPage", pageFullPath: "entry/src/main/ets/pages/ProductDetailPage", integratedHsp: "false", moduleType: "followWithHap" });
