import YumallSwiper from "./YumallSwiper.vue"

declare module '@vue/runtime-core' {  // 声明文件: 定义全局组件类型
    export interface GlobalComponents {
        // 全局组件名称: 组件类型
        YumallSwiper: typeof YumallSwiper
    }
}

// declare module : 声明文件: 定义模块类型