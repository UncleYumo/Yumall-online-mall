import { http } from "@/utils/http"
import { BannerItem } from "@/types/home"

// 首页广告区域的接口 1为首页 2为分类页
export const getHomeBannerApi = (distributionSite = 1) => {
    return http<BannerItem[]>({
        method: "GET",
        url: "/home/banner",
        data: {
            distributionSite
        }
    })
}