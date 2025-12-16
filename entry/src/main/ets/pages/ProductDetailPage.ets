import router from '@ohos.router';
import ProductItem from '../viewmodel/ProductItem';

@Entry
@Component
struct ProductDetail {
  // 接收上个页面传来的数据
  @State product: ProductItem = new ProductItem({
    image_url: $r('app.media.loading'),
    name: '加载中...',
    discount: '',
    price: '0',
    promotion: '',
    bonus_points: ''
  });

  // 模拟一些详情页特有的长文案
  private descriptionText: string = "【正品保障】精选优质面料，舒适透气。复古朋克摇滚风格，致敬经典电影《搏击俱乐部》。手工丝网印刷，图案清晰耐洗。无论是日常穿搭还是DIY改造，都能彰显独特的个性。\n\n适用于：T恤、卫衣、帆布包、牛仔外套等多种材质。\n\n注意事项：\n1. 请勿高温熨烫图案部分。\n2. 建议翻面洗涤。\n3. 手工制品，微小瑕疵属于正常现象，介意慎拍。";

  aboutToAppear() {
    const params = router.getParams();
    if (params) {
      this.product = params as ProductItem;
    }
  }

  @Builder
  ServiceItem(icon: ResourceStr, text: string) {
    Row() {
      Image(icon).width(14).height(14).fillColor('#FF0036').margin({ right: 4 }) // 假设你没有勾选图标，用圆点或颜色代替
      Text(text).fontSize(12).fontColor('#666')
    }
  }

  build() {
    // 使用 Stack 布局，为了让底部的“购买按钮”固定在最下方
    Stack({ alignContent: Alignment.Bottom }) {

      // --- 1. 主内容滚动区 ---
      Scroll() {
        Column() {
          // 1.1 顶部大图
          Stack({ alignContent: Alignment.BottomEnd }) {
            Image(this.product.image_url)
              .width('100%')
              .height(350) // 图片高度加高
              .objectFit(ImageFit.Cover)

            // 模拟图片张数指示器
            Text('1/5')
              .fontSize(12)
              .fontColor(Color.White)
              .backgroundColor('#80000000')
              .padding({ left: 10, right: 10, top: 4, bottom: 4 })
              .borderRadius(12)
              .margin({ right: 16, bottom: 16 })
          }

          // 1.2 价格与销量区
          Column() {
            Row() {
              // 【优化1】显示主价格
              // 单独显示人民币符号
              Text('¥').fontSize(16).fontColor('#FF5000').baselineOffset(-4).fontWeight(FontWeight.Bold)

              // 使用 .replace(/[^\d.]/g, '') 确保这里只显示纯数字，防止出现 "¥¥9.5" 的情况
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
              // 【优化2】解决 NaN 问题
              // 核心逻辑：先用 replace 把非数字字符删掉，再转成数字进行乘法计算
              Text('优惠前 ¥' + (parseFloat(this.product.price.replace(/[^\d.]/g, '') || '0') * 1.2).toFixed(0))
                .fontSize(12)
                .fontColor('#999')
                .decoration({ type: TextDecorationType.LineThrough })
            }.width('100%')
          }
          .padding(16)
          .backgroundColor(Color.White)

          // 1.3 标题与副标题
          Column() {
            Text(this.product.name + " 经典电影朋克摇滚文化喷印衣服包包DIY布贴") // 拼接一些模拟标题
              .fontSize(18)
              .fontWeight(FontWeight.Bold)
              .maxLines(2)
              .textOverflow({ overflow: TextOverflow.Ellipsis })
              .lineHeight(24)
              .margin({ bottom: 8 })

            // 标签行
            Row({ space: 8 }) {
              Text('极速退款').fontSize(10).fontColor('#FF0036').border({ width: 1, color: '#FF0036' }).padding(2).borderRadius(2)
              Text('包邮').fontSize(10).fontColor('#FF0036').border({ width: 1, color: '#FF0036' }).padding(2).borderRadius(2)
              Text('新品').fontSize(10).fontColor(Color.White).backgroundColor('#FF0036').padding(2).borderRadius(2)
            }
            .width('100%')
          }
          .padding({ left: 16, right: 16, bottom: 16 })
          .backgroundColor(Color.White)

          // 分隔条
          Divider().strokeWidth(8).color('#F5F5F5')

          // 1.4 发货与服务 (模拟)
          Column() {
            Row() {
              Text('发货').fontColor('#999').fontSize(14).width(40)
              Text('湖南长沙 | 快递: 0.00').fontSize(14).fontColor('#333')
              Blank()
              Text('月销 200+').fontSize(12).fontColor('#999')
            }
            .width('100%').padding({ top: 12, bottom: 12 })

            Divider().color('#EEE')

            Row() {
              Text('保障').fontColor('#999').fontSize(14).width(40)
              Row({ space: 10 }) {
                Text('7天无理由').fontSize(12).fontColor('#333')
                Text('运费险').fontSize(12).fontColor('#333')
                Text('公益宝贝').fontSize(12).fontColor('#333')
              }
              Blank()
              Text('>').fontColor('#CCC')
            }
            .width('100%').padding({ top: 12, bottom: 12 })
          }
          .padding({ left: 16, right: 16 })
          .backgroundColor(Color.White)

          Divider().strokeWidth(8).color('#F5F5F5')

          // 1.5 宝贝评价 (模拟)
          Column() {
            Row() {
              Text('宝贝评价 (13)').fontSize(16).fontWeight(FontWeight.Bold)
              Blank()
              Text('查看全部 >').fontSize(12).fontColor('#FF5000')
            }.width('100%').padding(16)

            // 模拟一条评论
            Row() {
              Image($r('app.media.app_icon')).width(24).height(24).borderRadius(12).margin({right:8}) // 需替换为你的默认头像
              Text('t***1').fontSize(12).fontColor('#999')
            }.width('100%').padding({left:16, bottom:8})
            Text('质量很好，布料很厚实，印刷也很清晰，非常喜欢！').fontSize(14).padding({left:16, right:16, bottom:16})
          }
          .backgroundColor(Color.White)

          Divider().strokeWidth(8).color('#F5F5F5')

          // 1.6 商品详情长文案 (你要求的介绍话语)
          Column() {
            Row() {
              Line().width(20).height(1).backgroundColor('#CCC')
              Text(' 宝贝详情 ').fontSize(14).fontColor('#999')
              Line().width(20).height(1).backgroundColor('#CCC')
            }.width('100%').justifyContent(FlexAlign.Center).padding(20)

            Text(this.descriptionText)
              .fontSize(15)
              .lineHeight(26)
              .fontColor('#333')
              .padding(16)

            // 底部占位，防止内容被底部按钮挡住
            Blank().height(80)
          }
          .backgroundColor(Color.White)
          .width('100%')
          .alignItems(HorizontalAlign.Start)

        }
        .width('100%')
        .backgroundColor('#F5F5F5') // 整体背景灰
      }
      .width('100%')
      .height('100%')
      .scrollBar(BarState.Off)


      // --- 2. 底部固定操作栏 ---
      Row() {
        // 左侧图标区
        Row({ space: 15 }) {
          Column() {
            Image($r('app.media.app_icon')).width(20).height(20) // 需替换为店铺icon
            Text('店铺').fontSize(10).fontColor('#666').margin({ top: 2 })
          }
          Column() {
            Image($r('app.media.app_icon')).width(20).height(20) // 需替换为客服icon
            Text('客服').fontSize(10).fontColor('#666').margin({ top: 2 })
          }
          Column() {
            Image($r('app.media.app_icon')).width(20).height(20) // 需替换为收藏icon
            Text('收藏').fontSize(10).fontColor('#666').margin({ top: 2 })
          }
        }
        .padding({ left: 16, right: 16 })

        Blank()

        // 右侧按钮区
        Row() {
          Button('加入购物车')
            .type(ButtonType.Normal)
            .backgroundColor('#FFC107') // 黄色
            .fontColor(Color.White)
            .fontSize(14)
            .height(40)
            .width(100)
            .borderRadius({ topLeft: 20, bottomLeft: 20 })

          Button('立即购买')
            .type(ButtonType.Normal)
            .backgroundColor('#FF5000') // 淘宝橙
            .fontColor(Color.White)
            .fontSize(14)
            .height(40)
            .width(100)
            .borderRadius({ topRight: 20, bottomRight: 20 })
            .onClick(() => {
              // 点击购买逻辑
              console.info('点击了购买')
            })
        }
        .margin({ right: 10 })
      }
      .width('100%')
      .height(60)
      .backgroundColor(Color.White)
      .border({ width: { top: 1 }, color: '#F0F0F0' }) // 顶部分割线

      // --- 3. 悬浮返回按钮 ---
      // 放在 Stack 最上层，覆盖在图片上
      Row() {
        Button('<') // 这里可以用你的返回图标 app.media.ic_back
          .type(ButtonType.Circle)
          .backgroundColor('#80000000') // 半透明黑
          .fontColor(Color.White)
          .fontSize(18)
          .width(32)
          .height(32)
          .margin({ top: 10, left: 16 })
          .onClick(() => {
            router.back();
          })
      }
      .width('100%')
      .height('100%')
      .hitTestBehavior(HitTestMode.Transparent) // 让点击穿透，只响应按钮
      .alignItems(VerticalAlign.Top)
    }
  }
}