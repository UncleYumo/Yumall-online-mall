<template>
  <view class="index">
    <CustomNavbar/>
    <YumallSwiper/>
    <CategoryPanel/>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue';

</script>

<style lang="scss">

</style>