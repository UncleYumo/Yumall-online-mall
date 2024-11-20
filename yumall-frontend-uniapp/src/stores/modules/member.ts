import { defineStore } from "pinia";
import { ref } from "vue";

export const useMemberStore = defineStore(
  "member",
  () => {

    const profile = ref()

    const setPrefile = (val: any) => {
        profile.value = val
    }

    const clearProfile = () => {
        profile.value = undefined
    }

    return {
        profile,
        setPrefile,
        clearProfile
    }

  },

  {
    // unistorage: true, // 开启后对 state 的数据读写都将持久化
    persist: {
        storage: {
            getItem(key: any) {
                return uni.getStorageSync(key)
            },
            setItem(key: any, value: any) {
                return uni.setStorageSync(key, value)
            }
        }
    }
  }
)