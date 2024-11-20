<template>
  <div>
    <uni-card title="基础卡片" sub-title="副标题" extra="额外信息" v-for="i in 12"
      thumbnail="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png">
      <text>这是一个带头像和双标题的基础卡片，此示例展示了一个完整的卡片。</text>
    </uni-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue' 
const title = ref('Yumall')
</script>

<style lang="sass" scoped>

</style>
