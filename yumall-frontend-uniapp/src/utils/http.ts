import { useMemberStore } from "@/stores/modules/member"

const baseURL: string = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'
// const baseURL: string = 'https://uncleyumo.cn/big-event/'

// 请求拦截器
const httpInterceptor = {
    invoke(options: UniApp.RequestOptions) {
        if (!options.url.startsWith('http')) {
            options.url = baseURL + options.url
        }
        options.timeout = 10000
        options.header = {
            ...options.header,  // 合并请求头
            'source-client': 'miniapp'
        }
        const memberStore = useMemberStore()
        const token = memberStore.profile?.token
        // console.log(token);
        if (token) {
            options.header['Authorization'] = token
            // console.log("TOKEN: " + token);
        }
        // console.log(options)
    }
}

uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)

interface Data<T> {
    code: String
    msg: String
    result: T
}

export const http = <T> (options: UniApp.RequestOptions) => {
    return new Promise<Data<T>>((resolve, reject)=>{
        uni.request({
            ...options,  // 合并请求参数
            success(res) {
                
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res.data as Data<T>)
                } else if (res.statusCode === 401) {

                    // 401 未授权，跳转到登录页面
                    const memberStore = useMemberStore()
                    memberStore.clearProfile()
                    uni.navigateTo({ url: '/pages/login/login' })
                    reject(res)
                } else {
                    // 其他错误
                    uni.showToast({
                        icon: 'none',
                        title: (res.data as Data<T>).msg as string || '请求失败，请稍后再试'
                    })
                    reject(res)
                }
            },
            fail(err) {
                uni.showToast({
                    icon: 'none',
                    title: '网络错误，请稍后再试'
                })
                reject(err)
            }
        })
    })
}