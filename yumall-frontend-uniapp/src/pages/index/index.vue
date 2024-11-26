<template>
  <view class="index">
    <CustomNavbar/>
    <YumallSwiper/>
    <!-- <text>index</text> -->
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue';
</script>

<style lang="scss" scoped>
  // .index {
  //   border: 3px solid red;
  // }
</style>