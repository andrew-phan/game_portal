import { fetchAllGamesApi, fetchBannersApi } from "~/features/home/home.service"
import type { TBannersRequest, TBannersResponse, TGamesRequest, TGamesResponse } from "~/features/home/home.type"
import { useHomeStore } from "~/store/home"

export const useIndex = () => {
  const homeStore = useHomeStore()

  // Method
  const fetchBanners = async () => {
    try {
      const { data }: { data: Ref<TBannersResponse> } = await useAsyncData('banners', () => {
        const query: TBannersRequest = { group: 'new1', lang: 'vi' }
        return fetchBannersApi(query)
      })
      homeStore.loadBanners(data.value?.data || [])
    } catch (error) {
      console.log(error)
    }
  }
  const fetchAllGames = async () => {
    try {
      const { data }: { data: Ref<TGamesResponse> } = await useAsyncData('games', () => {
        const query: TGamesRequest = { lang: 'vi' }
        return fetchAllGamesApi(query)
      })
      homeStore.loadAllGames(data.value?.data || [])
    } catch (error) {
      console.log(error)
    }
  }

  fetchBanners()
  fetchAllGames()
}