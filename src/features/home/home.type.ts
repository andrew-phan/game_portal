export type TBanner = {
  title: string;
  url: string;
  groups: string;
  dimensions: string;
  weight: number;
  jump_link: string;
  is_new_window: number;
}

export type TBannersResponse = {
  status: string;
  code: number;
  data: Array<TBanner>;
}

export type TBannersRequest = {
  group: string;
  lang: string;
}

export type TGamesRequest = {
  lang: string;
}

export type TGameOverview = {
  title: string;
  game_type: number;
  mobile_pic: string;
  tags: string;
  params: string;
  api_name: string;
  weight: number;
  game_type_text: string;
  game_type_cn_text: string;
}

export type TGameGroupByCategory = {
  title: string;
  icon_before: string;
  icon_after: string;
  child: Array<TGameOverview>
}

export type TGamesResponse = {
  status: string;
  code: number;
  message: string;
  data: Array<TGameGroupByCategory>; 
  web: Array<{ name: string; weight: string }>;
}

export type TGameDetail = {
  id: number;
  api_name: string;
  name: string;
  en_name: string;
  game_type: number;
  game_code: string;
  img_url: string;
  client_type: string;
  platform: string | null;
  param_remark: string;
  is_open: string;
  weight: string;
  tags: string;
  created_at: string;
  updated_at: string;
}

// export type TSpecialGameGroup = {
//   api_title: string,
//   api_name: string,
//   tags: string,
//   list: Array<TGameDetail>
// }

export type TMockGameResponse = {
  status: string,
  code: number,
  message: string,
  data: Array<TGameDetail>
}