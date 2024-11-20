import { defineStore } from "pinia";
import { ref } from "vue";

export const useMemberStore = defineStore(
    'member',
    () => {
        // Here is the state of member module
        const profile = ref()

        // Store info of member when login
        const setProfile = (val: any) => {
            profile.value = val
        }

        // Clear the store info of member when logout
        const clearProfile = () => {
            profile.value = undefined
        }

        // Return the state and methods of member module
        return {
            profile,
            setProfile,
            clearProfile
        }
    },
    // {

    //     persist: {
    //         storage: {
    //             getItem(key) {
    //                 return uni.getStorageSync(key)
    //             },
    //             setItem(key, value) {
    //                 return uni.setStorageSync(key, value)
    //             }
    //         }
    //     }
    // }
)