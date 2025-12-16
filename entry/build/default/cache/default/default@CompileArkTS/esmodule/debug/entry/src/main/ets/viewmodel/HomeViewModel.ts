import ProductItem from "@bundle:com.huawei.waterflow/entry/ets/viewmodel/ProductItem";
/**
 * Home page classify title data.
 */
const classifyTitle: Resource[] = [
    { "id": 16777230, "type": 10003, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" },
    { "id": 16777232, "type": 10003, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" },
    { "id": 16777226, "type": 10003, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" },
    { "id": 16777227, "type": 10003, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" },
    { "id": 16777231, "type": 10003, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" },
    { "id": 16777228, "type": 10003, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" },
    { "id": 16777229, "type": 10003, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }
];
/**
 * Home page swiper image data.
 */
const swiperImage: Resource[] = [
    { "id": 16777299, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" },
    { "id": 16777291, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" },
    { "id": 16777300, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }
];
/**
 * Home page water flow item init data.
 */
// ✅ 修复点2：类型改为 ProductItem[]
const waterFlowData: ProductItem[] = [
    // ✅ 修复点3：全部改为 new ProductItem(...) 并补全8个参数
    new ProductItem({ "id": 16777292, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }, 'XXX50E', '', '¥4088', '', '', '超长续航，告别电量焦虑。', // 补充简介
    [] // 补充详情图
    ),
    new ProductItem({ "id": 16777298, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }, 'XXXPadMate Xs 2 \n8GB+256GB （雅黑）', '', '¥9999', '限时', '', '超轻薄折叠设计，展开即是沉浸大屏。', []),
    new ProductItem({ "id": 16777294, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }, 'XX设备  新品优惠！机不可失！', '限时省200', '¥10099', '商品', '', '高性能生产力工具，办公娱乐两不误。', []),
    new ProductItem({ "id": 16777296, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }, '送给亲人  快速购买！', '限时省200', '¥199', '', '', '静音无线鼠标，手感舒适。', []),
    new ProductItem({ "id": 16777297, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }, 'XXXPad Pro', '', '¥3499', '', '', '120Hz高刷屏幕，哈曼卡顿调音。', []),
    new ProductItem({ "id": 16777295, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }, 'XXXMate 50 8GB+256GB', '', '¥5499', '', '', '昆仑玻璃，十档可变光圈。', []),
    new ProductItem({ "id": 16777293, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }, 'XXX60 Pro 新品上市！', '限时省200', '¥1299', '限时', '', '遥遥领先，卫星通话。', []),
    new ProductItem({ "id": 16777292, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }, 'XXX50E', '', '¥4088', '', '', '备用机首选，大电池大音量。', []),
    new ProductItem({ "id": 16777298, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }, 'XXXPadMate Xs 2 \n8GB+256GB （雅黑）', '限时省200', '¥9999', '限时', '', '折叠旗舰，轻薄手感。', []),
    new ProductItem({ "id": 16777294, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }, 'XX设备  新品优惠！新品优惠！', '限时省200', '¥10099', '商品', '', '设计师首选笔记本。', []),
    new ProductItem({ "id": 16777296, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }, '送给亲人  快速购买！', '限时省200', '¥199', '限时', '赠送积分', '蓝牙双模连接，多设备切换。', []),
    new ProductItem({ "id": 16777297, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }, 'XXXPad Pro\n限时折扣！', '限时省200', '¥3499', '', '赠送积分', '网课神器，护眼屏幕。', []),
    new ProductItem({ "id": 16777295, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }, 'XXXMate 50 \n8GB+256GB', '', '¥5499', '', '', '经典星环设计，XMAGE影像。', []),
    new ProductItem({ "id": 16777293, "type": 20000, params: [], "bundleName": "com.huawei.waterflow", "moduleName": "entry" }, 'XXX60 Pro', '限时省200', '¥1299', '限时', '', '全新玄武架构，超可靠。', [])
];
export { classifyTitle, swiperImage, waterFlowData };
