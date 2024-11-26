<script setup lang="ts">
import { ref } from 'vue'
const img_su7_url = 'https://s1.xiaomiev.com/activity-outer-assets/0328/images/su7/su7_'
const activeIndex = ref()
const onChange: UniHelper.SwiperOnChange = (ev) => {
  activeIndex.value = ev.detail!.current  // ! 非空断言，确保 activeIndex 一定有值
}

</script>

<template>
  <view class="carousel">
    <swiper
      :circular="true"
      :autoplay="true"
      :interval="2000"
      :indicator-dots="true"
      indicator-color="#626574"
      indicator-active-color="#fff"
      class="carousel-swiper"
      @change="onChange"
    >
      <swiper-item v-for="index in 3" :key="index">
        <view class="carousel-item" :style="{ backgroundImage: `url(${img_su7_url + (index) + '.jpg'})` }">
          <!-- 在这里添加你的内容 -->
          <text class="content">测试图片 - su7_{{ index }}.jpg</text>
        </view>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <!-- <view class="indicator"></view> -->
  </view>
  <h1>{{ activeIndex }}</h1>
</template>

<style lang="scss" scoped>
.carousel {
  position: relative; // 相对定位，让指示点相对于轮播图
  width: 100%; // 让轮播图宽度占满屏幕
  padding-top: 40%; // 16:9 的宽高比
  overflow: hidden; // 防止图片溢出
}

.carousel-swiper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.carousel-item {
  width: 100%;
  height: 100%;
  background-size: cover; // 确保背景图片覆盖整个区域
  background-position: center; // 背景图片居中
  display: flex;
  align-items: center;
  justify-content: center; // 垂直和水平居中内容
  color: white; // 文字颜色可以根据需要调整
  font-size: 24px; // 根据需要调整字体大小
  text-align: center; // 文本居中
}

.content {
  // 你可以在这里添加更多样式来控制内容的显示
}
</style>