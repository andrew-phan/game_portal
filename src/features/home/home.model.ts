import { useHomeStore } from "~/store/home"
import { fetchFeatureGamesApi, fetchUpcommingGamesApi } from "./home.service"
import type { TGameDetail } from "./home.type"

export const useHome = () => {
  const homeStore = useHomeStore()

  const fetchUpcommingGames = async () => {
    try {
      const { data }: { data: Ref<Array<TGameDetail>> } = await useAsyncData('upcommingGames', () => {
        return fetchUpcommingGamesApi()
      })
      homeStore.loadUpcommingGames(data.value)
    } catch (error) {
      console.log(error)
    }
  }
  const fetchFeatureGames = async () => {
    try {
      const { data }: { data: Ref<Array<TGameDetail>> } = await useAsyncData('featureGames', () => {
        return fetchFeatureGamesApi()
      })
      homeStore.loadFeatureGames(data.value)
    } catch (error) {
      console.log(error)
    }
  }

  fetchUpcommingGames()
  fetchFeatureGames()

  return {
    ...storeToRefs(homeStore),
  }
}