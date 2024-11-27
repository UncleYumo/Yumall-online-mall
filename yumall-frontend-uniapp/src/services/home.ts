import { http } from "@/utils/http"
import { BannerItem } from "@/types/home"
import { CategroyItem } from "@/types/home"

/**
 * @description 首页广告区域的接口 1为首页 2为分类页
 * @param distributionSite 首页广告位分布站点
 * @returns 
 */

export const getHomeBannerApi = (distributionSite = 1) => {
    return http<BannerItem[]>({
        method: "GET",
        url: "/home/banner",
        data: {
            distributionSite
        }
    })
}

/**
 * @description 获取首页分类多级联动数据
 * @returns 
 */
export const getHomeCategoryMutliApi = () => {
    return http<CategroyItem[]>({
        method: "GET",
        url: "/home/category/mutli"
    })
}