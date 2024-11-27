<template>
  <view class="index">
    <CustomNavbar/>
    <YumallSwiper/>
    <CategoryPanel :list="categoryList"/>
  </view>
</template>

<script setup lang="ts">
import { ref, Ref } from 'vue'
import CustomNavbar from './components/CustomNavbar.vue'
import CategoryPanel from './components/CategoryPanel.vue';
import { getHomeCategoryMutliApi } from '@/services/home';
import { CategroyItem } from '@/types/home';
import { onLoad } from '@dcloudio/uni-app';

const categoryList: Ref<CategroyItem[]> = ref([])

const getHomeCategoryData = async () => {
  const res = await getHomeCategoryMutliApi()
  categoryList.value = res.result
}

onLoad(()=>{
  getHomeCategoryData()
})

</script>

<style lang="scss">

</style>