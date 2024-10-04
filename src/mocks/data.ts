import type { TGameDetail } from "~/features/home/home.type"

const mockGames: Array<TGameDetail> = [
  {
    id: 2721,
    api_name: "BBIN",
    name: "Mô tông giáng thế",
    en_name: "",
    game_type: 3,
    game_code: "5221",
    img_url: "https://cms.t79.bet/storage/uploads/img/bbin/5221.png",
    client_type: "0",
    platform: null,
    param_remark: '{"gameType":"3"}',
    is_open: "1",
    weight: "1",
    tags: "hot,recommend,new",
    created_at: "0000-00-00 00:00:00",
    updated_at: "0000-00-00 00:00:00"
  },
  {
    id: 2722,
    api_name: "BBIN",
    name: "Nguyệt cung mỹ nhân",
    en_name: "",
    game_type: 3,
    game_code: "5227",
    img_url: "https://cms.t79.bet/storage/uploads/img/bbin/5227.png",
    client_type: "0",
    platform: null,
    param_remark: '{"gameType":"3"}',
    is_open: "1",
    weight: "1",
    tags: "hot,recommend,new",
    created_at: "0000-00-00 00:00:00",
    updated_at: "0000-00-00 00:00:00"
  },
]

const mockApiResponse = {
  status: "success",
  code: 200,
  message: "",
  data: [
    {
      api_title: "AG亚游",
      api_name: "AG",
      tags: "mothuong",
      list: mockGames
    },
    {
      api_title: "AG亚游",
      api_name: "AG",
      tags: "noibat",
      list: mockGames
    }
  ]
}

export const getMockGames = () => {
  return mockApiResponse
}

export const getUpcomingGames = () => {
  const upcomingCategory = mockApiResponse.data.find(cat => cat.tags === "mothuong")
  return upcomingCategory ? upcomingCategory.list : []
}

export const getFeatureGames = () => {
  const featuredCategory = mockApiResponse.data.find(cat => cat.tags === "noibat")
  return featuredCategory ? featuredCategory.list : []
}
