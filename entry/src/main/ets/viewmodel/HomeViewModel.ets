/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// ✅ 修复点1：去掉花括号，使用默认导入
import ProductItem from './ProductItem';

/**
 * Home page classify title data.
 */
const classifyTitle: Resource[] = [
  $r('app.string.title_bar_homepage'),
  $r('app.string.title_bar_phone'),
  $r('app.string.title_bar_computer'),
  $r('app.string.title_bar_foods'),
  $r('app.string.title_bar_men_wear'),
  $r('app.string.title_bar_fresh'),
  $r('app.string.title_bar_furniture_kitchenware')
];

/**
 * Home page swiper image data.
 */
const swiperImage: Resource[] = [
  $r('app.media.ic_home_appliances_special'),
  $r('app.media.ic_coupons'),
  $r('app.media.ic_internal_purchase_price')
];


/**
 * Home page water flow item init data.
 */
// ✅ 修复点2：类型改为 ProductItem[]
const waterFlowData: ProductItem[] = [
  // ✅ 修复点3：全部改为 new ProductItem(...) 并补全8个参数
  new ProductItem(
    $r('app.media.ic_holder_50e'),
    'XXX50E',
    '',
    '¥4088',
    '',
    '',
    '超长续航，告别电量焦虑。', // 补充简介
    [] // 补充详情图
  ),
  new ProductItem(
    $r('app.media.ic_holder_xs2'),
    'XXXPadMate Xs 2 \n8GB+256GB （雅黑）',
    '',
    '¥9999',
    '限时',
    '',
    '超轻薄折叠设计，展开即是沉浸大屏。',
    []
  ),
  new ProductItem(
    $r('app.media.ic_holder_computer'),
    'XX设备  新品优惠！机不可失！',
    '限时省200',
    '¥10099',
    '商品',
    '',
    '高性能生产力工具，办公娱乐两不误。',
    []
  ),
  new ProductItem(
    $r('app.media.ic_holder_mouse'),
    '送给亲人  快速购买！',
    '限时省200',
    '¥199',
    '',
    '',
    '静音无线鼠标，手感舒适。',
    []
  ),
  new ProductItem(
    $r('app.media.ic_holder_pad'),
    'XXXPad Pro',
    '',
    '¥3499',
    '',
    '',
    '120Hz高刷屏幕，哈曼卡顿调音。',
    []
  ),
  new ProductItem(
    $r('app.media.ic_holder_mate50'),
    'XXXMate 50 8GB+256GB',
    '',
    '¥5499',
    '',
    '',
    '昆仑玻璃，十档可变光圈。',
    []
  ),
  new ProductItem(
    $r('app.media.ic_holder_60pro'),
    'XXX60 Pro 新品上市！',
    '限时省200',
    '¥1299',
    '限时',
    '',
    '遥遥领先，卫星通话。',
    []
  ),
  new ProductItem(
    $r('app.media.ic_holder_50e'),
    'XXX50E',
    '',
    '¥4088',
    '',
    '',
    '备用机首选，大电池大音量。',
    []
  ),
  new ProductItem(
    $r('app.media.ic_holder_xs2'),
    'XXXPadMate Xs 2 \n8GB+256GB （雅黑）',
    '限时省200',
    '¥9999',
    '限时',
    '',
    '折叠旗舰，轻薄手感。',
    []
  ),
  new ProductItem(
    $r('app.media.ic_holder_computer'),
    'XX设备  新品优惠！新品优惠！',
    '限时省200',
    '¥10099',
    '商品',
    '',
    '设计师首选笔记本。',
    []
  ),
  new ProductItem(
    $r('app.media.ic_holder_mouse'),
    '送给亲人  快速购买！',
    '限时省200',
    '¥199',
    '限时',
    '赠送积分',
    '蓝牙双模连接，多设备切换。',
    []
  ),
  new ProductItem(
    $r('app.media.ic_holder_pad'),
    'XXXPad Pro\n限时折扣！',
    '限时省200',
    '¥3499',
    '',
    '赠送积分',
    '网课神器，护眼屏幕。',
    []
  ),
  new ProductItem(
    $r('app.media.ic_holder_mate50'),
    'XXXMate 50 \n8GB+256GB',
    '',
    '¥5499',
    '',
    '',
    '经典星环设计，XMAGE影像。',
    []
  ),
  new ProductItem(
    $r('app.media.ic_holder_60pro'),
    'XXX60 Pro',
    '限时省200',
    '¥1299',
    '限时',
    '',
    '全新玄武架构，超可靠。',
    []
  )
];

export { classifyTitle, swiperImage, waterFlowData };