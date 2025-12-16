import ProductItem from './ProductItem';

/**
 * 本地模拟数据源
 * 已经包含了：列表展示信息 + 详情页长文案 + 详情页轮播图
 */
export const PRODUCTS_DATA: ProductItem[] = [
  new ProductItem(
    $r('app.media.ic_holder_50e'),
    'XXX50E 5G手机',
    '',
    '¥4088',
    '',
    '',
    // --- 新增：详情介绍 ---
    '【超长续航】XXX50E 搭载 6000mAh 大电池，告别电量焦虑。配备 5000 万像素超清影像系统，记录生活美好瞬间。轻薄机身设计，手感舒适，无论是游戏还是追剧都能轻松应对。',
    // --- 新增：详情页图片数组 (为了演示，暂时复用一张图) ---
    [$r('app.media.ic_holder_50e'), $r('app.media.ic_app_background')]
  ),

  new ProductItem(
    $r('app.media.ic_holder_xs2'),
    'XXXPadMate Xs 2 \n8GB+256GB （雅黑）',
    '',
    '¥9999',
    '限时',
    '',
    '【折叠旗舰】超轻薄折叠设计，展开即是沉浸大屏。独创双旋鹰翼铰链，屏幕平整如镜。支持北斗卫星消息，无地面网络也能发送信息。典雅黑色外观，商务人士首选。',
    [$r('app.media.ic_holder_xs2'), $r('app.media.ic_holder_xs2')]
  ),

  new ProductItem(
    $r('app.media.ic_holder_computer'),
    'XX高性能笔记本 16英寸',
    '限时省200',
    '¥10099',
    '商品',
    '',
    '【生产力工具】搭载最新一代高性能处理器，32GB大内存，轻松运行大型软件。2.5K高分辨率屏幕，色彩还原准确，设计师的不二之选。全金属机身，散热强劲。',
    [$r('app.media.ic_holder_computer'), $r('app.media.ic_holder_mouse')]
  ),

  new ProductItem(
    $r('app.media.ic_holder_mouse'),
    '无线静音鼠标 二代',
    '限时省20',
    '¥199',
    '',
    '',
    '【静音办公】人体工学设计，贴合手掌曲线，久用不累。按键静音处理，图书馆、办公室使用不打扰他人。支持蓝牙/2.4G双模连接，多设备秒切换。',
    [$r('app.media.ic_holder_mouse')]
  ),

  new ProductItem(
    $r('app.media.ic_holder_pad'),
    'XXXPad Pro 11英寸',
    '',
    '¥3499',
    '',
    '',
    '【创造力平板】120Hz 高刷全面屏，搭配手写笔，书写体验如纸般流畅。内置专业笔记软件，学习办公效率倍增。四扬声器哈曼卡顿调音，影音娱乐神器。',
    [$r('app.media.ic_holder_pad'), $r('app.media.ic_holder_pad')]
  ),

  new ProductItem(
    $r('app.media.ic_holder_mate50'),
    'XXXMate 50 8GB+256GB',
    '',
    '¥5499',
    '',
    '',
    '【影像新生】XMAGE 影像品牌首发之作，物理光圈十档可调，夜景拍摄更清晰。昆仑玻璃面板，耐摔能力提升10倍。支持应急模式，低电量也能通话。',
    [$r('app.media.ic_holder_mate50')]
  ),

  new ProductItem(
    $r('app.media.ic_holder_60pro'),
    'XXX60 Pro 遥遥领先',
    '限时省200',
    '¥6999', // 修正了原本可能是错误的低价
    '限时',
    '',
    '【再续传奇】玄武架构，超可靠机身。卫星通话功能，时刻保持连接。鸿蒙操作系统4.0，流畅体验再升级。麒麟芯片回归，性能强悍。',
    [$r('app.media.ic_holder_60pro')]
  ),

  // --- 重复数据用于测试列表滚动效果，文案可以稍微做点区分 ---

  new ProductItem(
    $r('app.media.ic_holder_50e'),
    'XXX50E (备用机推荐)',
    '',
    '¥4088',
    '',
    '',
    '作为主力机的完美搭档，超长待机是它的杀手锏。老人、学生使用也非常合适，界面简洁大字体。',
    [$r('app.media.ic_holder_50e')]
  ),

  new ProductItem(
    $r('app.media.ic_holder_xs2'),
    'XXXPadMate Xs 2 (锦白)',
    '限时省200',
    '¥9999',
    '限时',
    '',
    '白色版本更加优雅，特殊的立体皮纹工艺，手感温润。折叠无痕，体验无缝。',
    [$r('app.media.ic_holder_xs2')]
  ),

  new ProductItem(
    $r('app.media.ic_holder_computer'),
    'XX游戏本 满血版',
    '限时省200',
    '¥10099',
    '商品',
    '',
    '专为电竞玩家打造，独立显卡直连，帧率稳定。RGB背光键盘，氛围感拉满。',
    [$r('app.media.ic_holder_computer')]
  ),

  new ProductItem(
    $r('app.media.ic_holder_mouse'),
    '送给亲人 快速购买！',
    '限时省50',
    '¥199',
    '限时',
    '赠送积分',
    '礼盒包装版本，送人更有面子。包含备用电池和鼠标垫。',
    [$r('app.media.ic_holder_mouse')]
  ),

  new ProductItem(
    $r('app.media.ic_holder_pad'),
    'XXXPad Pro 教育优惠版',
    '限时省200',
    '¥3499',
    '',
    '赠送积分',
    '凭学生证可享受教育优惠。不论是上网课还是画画，它都是你的好帮手。',
    [$r('app.media.ic_holder_pad')]
  ),

  new ProductItem(
    $r('app.media.ic_holder_mate50'),
    'XXXMate 50 昆仑霞光',
    '',
    '¥5499',
    '',
    '',
    '素皮材质，橙色外观充满活力。IP68级防尘抗水，无惧风雨。',
    [$r('app.media.ic_holder_mate50')]
  ),

  new ProductItem(
    $r('app.media.ic_holder_60pro'),
    'XXX60 Pro (白色)',
    '限时省200',
    '¥6999',
    '限时',
    '',
    '洛可可白，每一块背板的纹理都独一无二。',
    [$r('app.media.ic_holder_60pro')]
  )
];