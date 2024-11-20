<script setup lang="ts">
import {ref} from 'vue'

const count = ref(0)
const addCount = () => {
  if (count.value >= 5) {
    uni.showToast({
      title: 'count >= 5 即将刷新！'
    })
    count.value = 1
    return
  }
  count.value++
}
const pictureList = ref([
  {id: 1, url: "https://images.pexels.com/photos/27054224/pexels-photo-27054224.jpeg"},
  {id: 2, url: "https://images.pexels.com/photos/27198641/pexels-photo-27198641.jpeg"},
  {id: 3, url: "https://images.pexels.com/photos/20083342/pexels-photo-20083342.jpeg"},
  {id: 4, url: "https://images.pexels.com/photos/11483447/pexels-photo-11483447.jpeg"},
  {id: 5, url: "https://images.pexels.com/photos/28858569/pexels-photo-28858569.jpeg"},
])

const onPreviewImage = (url: string) => {
  console.log(url)
  uni.previewImage({
    urls: pictureList.value.map(item => item.url),
    current: url
  })
}

</script>

<template>
  <text> 功能页面 </text>
  <div style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100px;
      background-color: #ffd6d6;
      /*border: #3f536e solid 3px;*/
      margin-bottom: 20px;
      margin-top: 20px;
    ">
    <span style="font-size: larger;font-weight: bold;">太棒了! 谭薪峻!</span>
  </div>
  <div style="width: 50%;margin: 0 auto;">
    <button @click="addCount" style="background-color: #f0ad4e">{{ count }}</button>
  </div>
  <div style="margin-top: 20px;border: #3f536e solid 3px;">
    <!-- 轮播图组件 -->
    <swiper :autoplay="true" :indicator-dots="true" :circular="true" class="banner">
      <swiper-item v-for="item in pictureList" :key="item.id">
        <image class="image-item" :src="item.url" alt="轮播图"/>
      </swiper-item>
    </swiper>
  </div>
  <div style="margin-top: 20px;border: #3f536e solid 3px;">
    <!-- 轮播图组件 -->
    <swiper :autoplay="true" :indicator-dots="true" :circular="true" class="banner">
      <swiper-item v-for="item in pictureList" :key="item.id">
        <image @tap="onPreviewImage(item.url)" class="image-item" :src="item.url" alt="轮播图"/>
      </swiper-item>
    </swiper>
  </div>
</template>

<style scoped>
.banner {
  width: 100%;
  height: 600rpx;
}
.banner image {
  width: 750rpx;
  height: 600rpx;
}
</style>