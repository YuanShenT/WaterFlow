/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * ...
 */

import { CommonConstants as Const } from '../common/constants/CommonConstants';
import ClassifyComponent from '../view/ClassifyComponent';
import SearchComponent from '../view/SearchComponent';
import SwiperComponent from '../view/SwiperComponent';
import WaterFlowComponent from '../view/WaterFlowComponent';

/**
 * The home page consists of four components: search component,
 * classify component, swiper component, and waterfall flow component.
 */
@Entry
@Component
struct HomePage {
  // 获取系统状态栏高度（用于避让刘海屏/挖孔）
  @StorageLink('topRectHeight') topRectHeight: number = 0;

  build() {
    Stack({ alignContent: Alignment.Top }) {
      // 1. 背景图片
      Image($r('app.media.ic_app_background'))
        .width(Const.FULL_WIDTH)
        .height($r('app.float.image_background_height'))
        .objectFit(ImageFit.Cover)

      // 2. 主体内容列
      Column() {
        // 搜索栏
        SearchComponent()

        // 分类栏
        ClassifyComponent()

        // 轮播图
        SwiperComponent()

        // 瀑布流组件
        // 【重要】添加 .layoutWeight(1) 让它自动占满剩余高度，否则无法滚动
        WaterFlowComponent()
          .layoutWeight(1)

      }
      .height('100%') // 确保 Column 撑满全屏
      .padding({
        left: $r('app.float.home_margin_left'),
        right: $r('app.float.home_margin_right'),
        // 顶部避让系统状态栏
        top: this.getUIContext().px2vp(this.topRectHeight)
      })
    }
    .backgroundColor($r('app.color.home_background_color'))
  }
}