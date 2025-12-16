if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ProductDetail_Params {
    product?: ProductItem;
    descriptionText?: string;
}
import router from "@ohos:router";
import ProductItem from "@bundle:com.huawei.waterflow/entry/ets/viewmodel/ProductItem";
class ProductDetail extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__product = new ObservedPropertyObjectPU(new ProductItem({
            image_url: { "id": 16777305, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" },
            name: '加载中...',
            discount: '',
            price: '0',
            promotion: '',
            bonus_points: ''
        }), this, "product");
        this.descriptionText = "【正品保障】精选优质面料，舒适透气。复古朋克摇滚风格，致敬经典电影《搏击俱乐部》。手工丝网印刷，图案清晰耐洗。无论是日常穿搭还是DIY改造，都能彰显独特的个性。\n\n适用于：T恤、卫衣、帆布包、牛仔外套等多种材质。\n\n注意事项：\n1. 请勿高温熨烫图案部分。\n2. 建议翻面洗涤。\n3. 手工制品，微小瑕疵属于正常现象，介意慎拍。";
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ProductDetail_Params) {
        if (params.product !== undefined) {
            this.product = params.product;
        }
        if (params.descriptionText !== undefined) {
            this.descriptionText = params.descriptionText;
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
    // 接收上个页面传来的数据
    private __product: ObservedPropertyObjectPU<ProductItem>;
    get product() {
        return this.__product.get();
    }
    set product(newValue: ProductItem) {
        this.__product.set(newValue);
    }
    // 模拟一些详情页特有的长文案
    private descriptionText: string;
    aboutToAppear() {
        const params = router.getParams();
        if (params) {
            this.product = params as ProductItem;
        }
    }
    ServiceItem(icon: ResourceStr, text: string, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(icon);
            Image.width(14);
            Image.height(14);
            Image.fillColor('#FF0036');
            Image.margin({ right: 4 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(text);
            Text.fontSize(12);
            Text.fontColor('#666');
        }, Text);
        Text.pop();
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 使用 Stack 布局，为了让底部的“购买按钮”固定在最下方
            Stack.create({ alignContent: Alignment.Bottom });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // --- 1. 主内容滚动区 ---
            Scroll.create();
            // --- 1. 主内容滚动区 ---
            Scroll.width('100%');
            // --- 1. 主内容滚动区 ---
            Scroll.height('100%');
            // --- 1. 主内容滚动区 ---
            Scroll.scrollBar(BarState.Off);
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.width('100%');
            Column.backgroundColor('#F5F5F5');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 1.1 顶部大图
            Stack.create({ alignContent: Alignment.BottomEnd });
        }, Stack);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.product.image_url);
            Image.width('100%');
            Image.height(350);
            Image.objectFit(ImageFit.Cover);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 模拟图片张数指示器
            Text.create('1/5');
            // 模拟图片张数指示器
            Text.fontSize(12);
            // 模拟图片张数指示器
            Text.fontColor(Color.White);
            // 模拟图片张数指示器
            Text.backgroundColor('#80000000');
            // 模拟图片张数指示器
            Text.padding({ left: 10, right: 10, top: 4, bottom: 4 });
            // 模拟图片张数指示器
            Text.borderRadius(12);
            // 模拟图片张数指示器
            Text.margin({ right: 16, bottom: 16 });
        }, Text);
        // 模拟图片张数指示器
        Text.pop();
        // 1.1 顶部大图
        Stack.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 1.2 价格与销量区
            Column.create();
            // 1.2 价格与销量区
            Column.padding(16);
            // 1.2 价格与销量区
            Column.backgroundColor(Color.White);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.alignItems(VerticalAlign.Bottom);
            Row.margin({ bottom: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 【优化1】显示主价格
            // 单独显示人民币符号
            Text.create('¥');
            // 【优化1】显示主价格
            // 单独显示人民币符号
            Text.fontSize(16);
            // 【优化1】显示主价格
            // 单独显示人民币符号
            Text.fontColor('#FF5000');
            // 【优化1】显示主价格
            // 单独显示人民币符号
            Text.baselineOffset(-4);
            // 【优化1】显示主价格
            // 单独显示人民币符号
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        // 【优化1】显示主价格
        // 单独显示人民币符号
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 使用 .replace(/[^\d.]/g, '') 确保这里只显示纯数字，防止出现 "¥¥9.5" 的情况
            Text.create(this.product.price.replace(/[^\d.]/g, ''));
            // 使用 .replace(/[^\d.]/g, '') 确保这里只显示纯数字，防止出现 "¥¥9.5" 的情况
            Text.fontSize(28);
            // 使用 .replace(/[^\d.]/g, '') 确保这里只显示纯数字，防止出现 "¥¥9.5" 的情况
            Text.fontColor('#FF5000');
            // 使用 .replace(/[^\d.]/g, '') 确保这里只显示纯数字，防止出现 "¥¥9.5" 的情况
            Text.fontWeight(FontWeight.Bold);
            // 使用 .replace(/[^\d.]/g, '') 确保这里只显示纯数字，防止出现 "¥¥9.5" 的情况
            Text.margin({ right: 8 });
        }, Text);
        // 使用 .replace(/[^\d.]/g, '') 确保这里只显示纯数字，防止出现 "¥¥9.5" 的情况
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
            // 【优化2】解决 NaN 问题
            // 核心逻辑：先用 replace 把非数字字符删掉，再转成数字进行乘法计算
            Text.create('优惠前 ¥' + (parseFloat(this.product.price.replace(/[^\d.]/g, '') || '0') * 1.2).toFixed(0));
            // 【优化2】解决 NaN 问题
            // 核心逻辑：先用 replace 把非数字字符删掉，再转成数字进行乘法计算
            Text.fontSize(12);
            // 【优化2】解决 NaN 问题
            // 核心逻辑：先用 replace 把非数字字符删掉，再转成数字进行乘法计算
            Text.fontColor('#999');
            // 【优化2】解决 NaN 问题
            // 核心逻辑：先用 replace 把非数字字符删掉，再转成数字进行乘法计算
            Text.decoration({ type: TextDecorationType.LineThrough });
        }, Text);
        // 【优化2】解决 NaN 问题
        // 核心逻辑：先用 replace 把非数字字符删掉，再转成数字进行乘法计算
        Text.pop();
        Row.pop();
        // 1.2 价格与销量区
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 1.3 标题与副标题
            Column.create();
            // 1.3 标题与副标题
            Column.padding({ left: 16, right: 16, bottom: 16 });
            // 1.3 标题与副标题
            Column.backgroundColor(Color.White);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.product.name + " 经典电影朋克摇滚文化喷印衣服包包DIY布贴");
            Text.fontSize(18);
            Text.fontWeight(FontWeight.Bold);
            Text.maxLines(2);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.lineHeight(24);
            Text.margin({ bottom: 8 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 标签行
            Row.create({ space: 8 });
            // 标签行
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
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('新品');
            Text.fontSize(10);
            Text.fontColor(Color.White);
            Text.backgroundColor('#FF0036');
            Text.padding(2);
            Text.borderRadius(2);
        }, Text);
        Text.pop();
        // 标签行
        Row.pop();
        // 1.3 标题与副标题
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 分隔条
            Divider.create();
            // 分隔条
            Divider.strokeWidth(8);
            // 分隔条
            Divider.color('#F5F5F5');
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 1.4 发货与服务 (模拟)
            Column.create();
            // 1.4 发货与服务 (模拟)
            Column.padding({ left: 16, right: 16 });
            // 1.4 发货与服务 (模拟)
            Column.backgroundColor(Color.White);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.padding({ top: 12, bottom: 12 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('发货');
            Text.fontColor('#999');
            Text.fontSize(14);
            Text.width(40);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('湖南长沙 | 快递: 0.00');
            Text.fontSize(14);
            Text.fontColor('#333');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('月销 200+');
            Text.fontSize(12);
            Text.fontColor('#999');
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.color('#EEE');
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.padding({ top: 12, bottom: 12 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('保障');
            Text.fontColor('#999');
            Text.fontSize(14);
            Text.width(40);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('7天无理由');
            Text.fontSize(12);
            Text.fontColor('#333');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('运费险');
            Text.fontSize(12);
            Text.fontColor('#333');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('公益宝贝');
            Text.fontSize(12);
            Text.fontColor('#333');
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('>');
            Text.fontColor('#CCC');
        }, Text);
        Text.pop();
        Row.pop();
        // 1.4 发货与服务 (模拟)
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.strokeWidth(8);
            Divider.color('#F5F5F5');
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 1.5 宝贝评价 (模拟)
            Column.create();
            // 1.5 宝贝评价 (模拟)
            Column.backgroundColor(Color.White);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.width('100%');
            Row.padding(16);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('宝贝评价 (13)');
            Text.fontSize(16);
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('查看全部 >');
            Text.fontSize(12);
            Text.fontColor('#FF5000');
        }, Text);
        Text.pop();
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 模拟一条评论
            Row.create();
            // 模拟一条评论
            Row.width('100%');
            // 模拟一条评论
            Row.padding({ left: 16, bottom: 8 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777217, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Image.width(24);
            Image.height(24);
            Image.borderRadius(12);
            Image.margin({ right: 8 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('t***1');
            Text.fontSize(12);
            Text.fontColor('#999');
        }, Text);
        Text.pop();
        // 模拟一条评论
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('质量很好，布料很厚实，印刷也很清晰，非常喜欢！');
            Text.fontSize(14);
            Text.padding({ left: 16, right: 16, bottom: 16 });
        }, Text);
        Text.pop();
        // 1.5 宝贝评价 (模拟)
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.strokeWidth(8);
            Divider.color('#F5F5F5');
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 1.6 商品详情长文案 (你要求的介绍话语)
            Column.create();
            // 1.6 商品详情长文案 (你要求的介绍话语)
            Column.backgroundColor(Color.White);
            // 1.6 商品详情长文案 (你要求的介绍话语)
            Column.width('100%');
            // 1.6 商品详情长文案 (你要求的介绍话语)
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
            Text.create(this.descriptionText);
            Text.fontSize(15);
            Text.lineHeight(26);
            Text.fontColor('#333');
            Text.padding(16);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 底部占位，防止内容被底部按钮挡住
            Blank.create();
            // 底部占位，防止内容被底部按钮挡住
            Blank.height(80);
        }, Blank);
        // 底部占位，防止内容被底部按钮挡住
        Blank.pop();
        // 1.6 商品详情长文案 (你要求的介绍话语)
        Column.pop();
        Column.pop();
        // --- 1. 主内容滚动区 ---
        Scroll.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // --- 2. 底部固定操作栏 ---
            Row.create();
            // --- 2. 底部固定操作栏 ---
            Row.width('100%');
            // --- 2. 底部固定操作栏 ---
            Row.height(60);
            // --- 2. 底部固定操作栏 ---
            Row.backgroundColor(Color.White);
            // --- 2. 底部固定操作栏 ---
            Row.border({ width: { top: 1 }, color: '#F0F0F0' });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 左侧图标区
            Row.create({ space: 15 });
            // 左侧图标区
            Row.padding({ left: 16, right: 16 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777217, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Image.width(20);
            Image.height(20);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('店铺');
            Text.fontSize(10);
            Text.fontColor('#666');
            Text.margin({ top: 2 });
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777217, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Image.width(20);
            Image.height(20);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('客服');
            Text.fontSize(10);
            Text.fontColor('#666');
            Text.margin({ top: 2 });
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777217, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" });
            Image.width(20);
            Image.height(20);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('收藏');
            Text.fontSize(10);
            Text.fontColor('#666');
            Text.margin({ top: 2 });
        }, Text);
        Text.pop();
        Column.pop();
        // 左侧图标区
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 右侧按钮区
            Row.create();
            // 右侧按钮区
            Row.margin({ right: 10 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('加入购物车');
            Button.type(ButtonType.Normal);
            Button.backgroundColor('#FFC107');
            Button.fontColor(Color.White);
            Button.fontSize(14);
            Button.height(40);
            Button.width(100);
            Button.borderRadius({ topLeft: 20, bottomLeft: 20 });
        }, Button);
        Button.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Button.createWithLabel('立即购买');
            Button.type(ButtonType.Normal);
            Button.backgroundColor('#FF5000');
            Button.fontColor(Color.White);
            Button.fontSize(14);
            Button.height(40);
            Button.width(100);
            Button.borderRadius({ topRight: 20, bottomRight: 20 });
            Button.onClick(() => {
                // 点击购买逻辑
                console.info('点击了购买');
            });
        }, Button);
        Button.pop();
        // 右侧按钮区
        Row.pop();
        // --- 2. 底部固定操作栏 ---
        Row.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // --- 3. 悬浮返回按钮 ---
            // 放在 Stack 最上层，覆盖在图片上
            Row.create();
            // --- 3. 悬浮返回按钮 ---
            // 放在 Stack 最上层，覆盖在图片上
            Row.width('100%');
            // --- 3. 悬浮返回按钮 ---
            // 放在 Stack 最上层，覆盖在图片上
            Row.height('100%');
            // --- 3. 悬浮返回按钮 ---
            // 放在 Stack 最上层，覆盖在图片上
            Row.hitTestBehavior(HitTestMode.Transparent);
            // --- 3. 悬浮返回按钮 ---
            // 放在 Stack 最上层，覆盖在图片上
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
            Button.onClick(() => {
                router.back();
            });
        }, Button);
        Button.pop();
        // --- 3. 悬浮返回按钮 ---
        // 放在 Stack 最上层，覆盖在图片上
        Row.pop();
        // 使用 Stack 布局，为了让底部的“购买按钮”固定在最下方
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
