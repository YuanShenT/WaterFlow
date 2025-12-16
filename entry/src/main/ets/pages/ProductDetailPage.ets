import router from '@ohos.router';
import ProductItem from '../viewmodel/ProductItem';

@Entry
@Component
struct ProductDetail {
  // 修复点：这里必须填满8个参数，对应 ProductItem 的构造函数
  @State product: ProductItem = new ProductItem(
    $r('app.media.loading'),
    '',
    '',
    '',
    '',
    '',
    '',
    []
  );

  aboutToAppear() {
    const params = router.getParams();
    if (params) {
      this.product = params as ProductItem;
    }
  }

  build() {
    Stack({ alignContent: Alignment.BottomEnd }) {
      Scroll() {
        Column() {
          // 1. 顶部大图
          Stack({ alignContent: Alignment.BottomEnd }) {
            Image(this.product.image_url)
              .width('100%')
              .height(350)
              .objectFit(ImageFit.Cover)

            Text('1/5')
              .fontSize(12)
              .fontColor(Color.White)
              .backgroundColor('#80000000')
              .padding({ left: 10, right: 10, top: 4, bottom: 4 })
              .borderRadius(12)
              .margin({ right: 16, bottom: 16 })
          }

          // 2. 价格与销量
          Column() {
            Row() {
              Text('¥').fontSize(16).fontColor('#FF5000').baselineOffset(-4).fontWeight(FontWeight.Bold)
              Text(this.product.price.replace(/[^\d.]/g, ''))
                .fontSize(28)
                .fontColor('#FF5000')
                .fontWeight(FontWeight.Bold)
                .margin({ right: 8 })
              Text('券后').fontSize(12).fontColor('#FF5000').backgroundColor('#FFE4D0').padding({left:4, right:4, top:1, bottom:1}).borderRadius(2)
              Blank()
              Text('已售 98+').fontSize(12).fontColor('#999')
            }.width('100%').alignItems(VerticalAlign.Bottom).margin({ bottom: 8 })

            Row() {
              Text('优惠前 ¥' + (parseFloat(this.product.price.replace(/[^\d.]/g, '') || '0') * 1.2).toFixed(0))
                .fontSize(12)
                .fontColor('#999')
                .decoration({ type: TextDecorationType.LineThrough })
            }.width('100%')
          }
          .padding(16)
          .backgroundColor(Color.White)

          // 3. 标题
          Column() {
            Text(this.product.name)
              .fontSize(18)
              .fontWeight(FontWeight.Bold)
              .maxLines(2)
              .textOverflow({ overflow: TextOverflow.Ellipsis })
              .lineHeight(24)
              .margin({ bottom: 8 })

            Row({ space: 8 }) {
              Text('极速退款').fontSize(10).fontColor('#FF0036').border({ width: 1, color: '#FF0036' }).padding(2).borderRadius(2)
              Text('包邮').fontSize(10).fontColor('#FF0036').border({ width: 1, color: '#FF0036' }).padding(2).borderRadius(2)
            }.width('100%')
          }
          .padding({ left: 16, right: 16, bottom: 16 })
          .backgroundColor(Color.White)

          Divider().strokeWidth(8).color('#F5F5F5')

          // 4. 详情介绍 (读取新字段 description)
          Column() {
            Row() {
              Line().width(20).height(1).backgroundColor('#CCC')
              Text(' 宝贝详情 ').fontSize(14).fontColor('#999')
              Line().width(20).height(1).backgroundColor('#CCC')
            }.width('100%').justifyContent(FlexAlign.Center).padding(20)

            Text(this.product.description)
              .fontSize(15)
              .lineHeight(26)
              .fontColor('#333')
              .padding(16)

            // 详情图展示
            ForEach(this.product.detailImages, (img: ResourceStr) => {
              Image(img)
                .width('100%')
                .objectFit(ImageFit.Cover) // ✅ 这里改成了 objectFit
                .margin({ bottom: 10 })
            })

            Blank().height(80)
          }
          .backgroundColor(Color.White)
          .width('100%')
          .alignItems(HorizontalAlign.Start)
        }
        .width('100%')
        .backgroundColor('#F5F5F5')
      }
      .width('100%')
      .height('100%')
      .scrollBar(BarState.Off)

      // 底部按钮
      Row() {
        Button('立即购买')
          .type(ButtonType.Normal)
          .backgroundColor('#FF5000')
          .fontColor(Color.White)
          .width('100%')
          .height(50)
          .onClick(() => { console.info('Buy') })
      }
      .width('100%')
      .backgroundColor(Color.White)

      // 返回按钮
      Row() {
        Button('<')
          .type(ButtonType.Circle)
          .backgroundColor('#80000000')
          .fontColor(Color.White)
          .fontSize(18)
          .width(32)
          .height(32)
          .margin({ top: 10, left: 16 })
          .onClick(() => { router.back(); })
      }
      .width('100%')
      .height('100%')
      .hitTestBehavior(HitTestMode.Transparent)
      .alignItems(VerticalAlign.Top)
    }
  }
}