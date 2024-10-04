import { $api } from '~/hooks/http-client'
import { type TBannersRequest, type TBannersResponse, type TGameDetail, type TGamesRequest, type TGamesResponse, type TMockGameResponse } from './home.type'
import { getFeatureGames, getUpcomingGames } from '@/mocks/data'

const BANNERS_PATH = '/banners'
const GAMES_PATH = '/games'

export const fetchBannersApi = async (query: TBannersRequest): Promise<TBannersResponse> => {
  return await $api(BANNERS_PATH, {
    method: 'GET',
    query,
  })
}

export const fetchAllGamesApi = async (query: TGamesRequest): Promise<TGamesResponse> => {
  return await $api(GAMES_PATH, {
    method: 'GET',
    query
  })
}

export const fetchUpcommingGamesApi = async (): Promise<Array<TGameDetail>> => {
  return Promise.resolve(getUpcomingGames() || [])
}

export const fetchFeatureGamesApi = async (): Promise<Array<TGameDetail>> => {
  return Promise.resolve(getFeatureGames() || [])
}