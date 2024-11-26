<script setup lang="ts">
import { getHomeBannerApi } from '@/services/home';
import { onLoad } from '@dcloudio/uni-app';
import { ref } from 'vue';
import { Ref } from 'vue';
import { BannerItem } from '@/types/home';

const bannerList: Ref<BannerItem[]> = ref([])

const getHomeBannerData = async () => {
  const res = await getHomeBannerApi()
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})

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
    >
      <swiper-item v-for="(item, index) in bannerList" :key="index">
        <view class="carousel-item" :style="{ backgroundImage: `url(${item.imgUrl})` }">
          <text class="content">虽然全是智商税 但不构成购买意见</text>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<style lang="scss" scoped>
.carousel {
  position: relative;
  width: 100%;
  padding-top: 40%;
  overflow: hidden;
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
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  color: rgb(236, 32, 32);
  font-size: 22px;
  font-weight: bold;
  text-align: center;
}
</style>