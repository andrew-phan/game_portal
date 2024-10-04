import type { TLoginResponse, TTokenInfo } from "~/types/auth";

type State = {
  tokenInfo: {
    key: string;
    expiredDate: string;
    expiredIn: number;
  }
  userInfo: any;
}

export const useAuthStore = defineStore('auth', () => {
  // State
  const state = reactive<State>({
    tokenInfo: {
      key: '',
      expiredDate: '',
      expiredIn: 0
    },
    userInfo: {}
  })

  // Computed
  const isAuthenticated = computed(() => {
    const now = new Date();
    const expiredDate = new Date(state.tokenInfo.expiredDate);

    return state.tokenInfo.key && (expiredDate.getTime() > now.getTime())
  })

  // Method
  const loadTokenInfo = (data: TTokenInfo) => {
    state.tokenInfo = {
      key: data.key || '',
      expiredDate: data.expiredDate || '',
      expiredIn: data.expiredIn || 0
    }
  }

  return { 
    // State
    ...toRefs(state),

    // Computed
    isAuthenticated,

    // Method
    loadTokenInfo,
  }
})