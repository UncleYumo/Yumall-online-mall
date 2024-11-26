<template>
  <view class="category-panel">
    <view class="category">
      <navigator url="/pages/index/index" open-type="navigate" hover-class="navigator-hover" v-for="item in 10">

        <image
          class="icon"
          :src="`https://pcapi-xiaotuxian-front-devtest.itheima.net/miniapp/images/nav_icon_${item}.png`"
        >
        </image>

      </navigator>
    </view>
  </view>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.category-panel {

  // border: 2px solid #1c1c1c;
  background-color: rgb(244, 244, 244); // 设置背景色
  display: flex; // 确保.category-panel本身也是一个flex容器，以便其中的内容可以垂直水平居中
  justify-content: center; // 水平居中
  align-items: center; // 垂直居中
  min-height: 328rpx; // 保持最小高度，确保有足够的空间进行内容展示

  .category {
    // border: 2px solid #1c1c1c;
    margin: 0 auto; // 居中
    padding: 5rpx 0;
    display: flex; // 使其成为一个 flex 容器
    flex-wrap: wrap; // 允许换行
    justify-content: space-between; // 在每行内均匀分布项目
    width: 700rpx; // 设置宽度以适应5个图标加上间隔
    box-sizing: border-box; // 确保padding和border被包含在width之内
    // background-color: white; // 设置背景色

    // 子元素image
    .icon {
      // border: 1px solid #1c1c1c;
      width: 130rpx;
      height: 130rpx;
      // margin: 10rpx 0; // 上下间距
    }
  }
}
</style>