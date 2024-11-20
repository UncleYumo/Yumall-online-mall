<template>
  
  <div class="my">
    <div>
      <div>会员信息: {{ memberStore.profile.nickname }}</div>
      <div>
        <input focus placeholder="请输入昵称" v-model="nickename">
      </div>
      <div class="btn-group">

        <button @tap="submitInfo()" size="mini" plain type="primary">
          提交用户信息
        </button>

        <button @tap="clearInfo()" size="mini" plain type="warn">
          清理用户信息
        </button>

        <button @tap="testRequest()" size="mini" plain type="default">
          测试请求
        </button>
      </div>
      <div>

        <uni-section title="多行文本自动高度" subTitle="使用属性 autoHeight 使多行文本框自动增高" type="line" padding>
          <uni-easyinput type="textarea" :auto-height="true" v-model="url" placeholder="请输入内容"></uni-easyinput>
        </uni-section>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMemberStore } from '@/stores/modules/member'
import { ref } from 'vue';
import { http } from '@/utils/http'

const memberStore = useMemberStore();
const clearInfo = () => {
  memberStore.clearProfile()
  uni.showToast({
    title: '清理成功'
  })
}

const nickename = ref("")
const url = ref("/home/banner")

const submitInfo = () => {
  let str: String = nickename.value ? nickename.value : "Undifined Nickname"
  memberStore.setPrefile({
    nickname: str,
    token: "123456"
  })
}

const testRequest = () => {
  uni.request({
    method: 'GET',
    url: url.value
  }).then(res => {
    // 将返回的对象转换为字符串
    let dataStr = JSON.stringify(res.data, null, 2); // 使用缩进，便于阅读
    console.log(dataStr);
    // 更新 textarea 的值
    url.value = dataStr;
  })
}

</script>


<style scoped lang="scss">
.my {
  font-size: 16px;
  color: #333;

  .btn-group {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
