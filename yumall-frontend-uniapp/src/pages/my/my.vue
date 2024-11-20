<template>
  <div class="my">
    <div>
      <div>会员信息: {{ memberStore.profile }}</div>
      <div>
        <input focus placeholder="请输入昵称" v-model="nickename">
      </div>
      <div class="btn-group">
        <button @tap="memberStore.setProfile({
          nickname: 'Uncle Yumo'
        })" size="mini" plain type="primary">
          保存默认信息
        </button>

        <button @tap="submitInfo()" size="mini" plain type="default">
          提交用户信息
        </button>

        <button @tap="clearInfo" size="mini" plain type="warn">
          清理用户信息
        </button>
      </div>
      <div>
        <uni-popup ref="popup" type="message">
          <uni-popup-message type="success" message="成功消息" :duration="2000"></uni-popup-message>
        </uni-popup>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMemberStore } from '@/stores/modules/member';
import { ref } from 'vue';

const memberStore = useMemberStore();
const clearInfo = () => {
  memberStore.ClearProfile()
  uni.showToast({
    title: '清理成功'
  })
}

const nickename = ref("")

const submitInfo = () => {
  let str: String = nickename.value ? nickename.value : "Undifined Nickname"
  memberStore.setProfile({
    nickname: str
  })
}

const openPopup = () => {

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
