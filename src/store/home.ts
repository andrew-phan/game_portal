import type { TBanner, TGameDetail, TGameGroupByCategory } from "~/features/home/home.type"

type State = {
  banners: Array<TBanner>,
  games: Array<TGameGroupByCategory>,
  upcommingGames: Array<TGameDetail>,
  featureGames: Array<TGameDetail>
}

export const useHomeStore = defineStore('home', () => {
  // State
  const state = reactive<State>({
    banners: [],
    games: [],
    upcommingGames: [],
    featureGames: []
  })

  // Computed

  // Method
  const loadBanners = (banners: Array<TBanner>) => {
    state.banners = banners || []
  }
  const loadAllGames = (games: Array<TGameGroupByCategory>) => {
    state.games = games || []
  }
  const loadUpcommingGames = (games: Array<TGameDetail>) => {
    state.upcommingGames = games || []
  }
  const loadFeatureGames = (games: Array<TGameDetail>) => {
    state.featureGames = games || []
  }

  return {
    // State
    ...toRefs(state),
    
    // Computed

    // Method
    loadBanners,
    loadAllGames,
    loadUpcommingGames,
    loadFeatureGames,
  }
})