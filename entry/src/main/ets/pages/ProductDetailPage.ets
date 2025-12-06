import router from '@ohos.router';
import ProductItem from '../viewmodel/ProductItem';

/**
 * 商品详情页
 */
@Entry
@Component
struct ProductDetail {
  // 定义默认对象
  @State ProductDetail:ProductItem = new ProductItem({
    image_url: $r('app.media.loading'),
    name: '加载中...',
    discount:'',
    price:'',
    promotion:'',
    bonus_points:''
  });

  // 接收参数（类型断言）
  aboutToAppear() {
    const params = router.getParams();

    if(params){
      this.ProductDetail = params as ProductItem;
    }
  }

  build() {
    Column(){
      Image(this.ProductDetail.image_url)
        .width('100%')
        .height(300)
        .objectFit(ImageFit.Contain)

      Text(this.ProductDetail.name)
        .fontSize(24)
        .fontWeight(FontWeight.Bold)
        .margin({top:10,bottom:10})
        .padding({left:15,right:15})

      Text(this.ProductDetail.price)
        .fontSize(20)
        .fontColor(Color.Blue)
        .backgroundColor('#E6F7FF')
        .padding(5)

      Row() {
        Text(this.ProductDetail.promotion)
          .fontSize(14)
          .fontColor(Color.Blue)
          .backgroundColor('#E6F7FF')
          .padding(5)

        Text(this.ProductDetail.bonus_points)
          .fontSize(14)
          .fontColor(Color.Gray)
          .margin({left:10})
      }
      .margin({top:10,left:15})
      .width('100%')
    }
    .width('100%')
    .height('100%')
    .backgroundColor(Color.White)
    .alignItems(HorizontalAlign.Start)
  }

}



