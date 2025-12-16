/**
 * 商品数据模型
 * 对应 MockData 中的数据结构
 */
@Observed
export default class ProductItem {
    /** 商品列表展示图片 */
    image_url: ResourceStr;
    /** 商品名称 */
    name: string;
    /** 折扣信息 (e.g. "限时省200") */
    discount: string;
    /** 价格 (e.g. "¥4088") */
    price: string;
    /** 促销标签 (e.g. "限时") */
    promotion: string;
    /** 积分赠送信息 */
    bonus_points: string;
    /** [新增] 商品详细介绍文案 */
    description: string;
    /** [新增] 详情页轮播图列表 */
    detailImages: ResourceStr[];
    constructor(image_url: ResourceStr, name: string, discount: string, price: string, promotion: string, bonus_points: string, description: string, detailImages: ResourceStr[]) {
        this.image_url = image_url;
        this.name = name;
        this.discount = discount;
        this.price = price;
        this.promotion = promotion;
        this.bonus_points = bonus_points;
        this.description = description;
        this.detailImages = detailImages;
    }
}
