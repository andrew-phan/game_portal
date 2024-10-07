import { $api } from "~/hooks/http-client"
import { $toast } from "~/hooks/toast"
import { useAuthStore } from "~/store/auth"
import type { TLoginRequest, TLoginResponse, TTokenInfo } from "~/types/auth"

export const useAuth = () => {
  const state = reactive<{ loading: boolean }>({ loading: false })
  const authStore = useAuthStore()

  // authStore.loadTokenInfo((token.value || {
  //   key: '',
  //   expiredDate: '',
  //   expiredIn: 0
  // }) as TTokenInfo)

  // Method
  const signIn = async ({ lang = 'vi', username, password }: TLoginRequest, callback?: Function) => {
    try {
      state.loading = true
      const captchaRes: any = await $api('/auth/captcha', {
        method: "POST",
        query: { lang }
      })
      if (!captchaRes?.data?.key) return;

      const { data }: { data: TLoginResponse } = await $api('/auth/login', {
        method: "POST",
        query: { lang },
        body: { 
          name: username,
          password: password,
          key: captchaRes.data.key,
          captcha: ""
        }
      })

      // // Set token to cookies
      // token = useCookie('token', {
      //   default: () => JSON.stringify({
      //     key: data.access_token,
      //     expiredDate: data.expires_at,
      //     expiredIn: data.expires_in
      //   }),
      //   expires: new Date(data.expires_at)
      // })

      const res: any = await $api('/auth/me', {
        method: "POST",
        query: { lang: 'vi' }
      })
      console.log(res)

      // Load token in auth store
      authStore.loadTokenInfo({ 
        key: data.access_token,
        expiredDate: data.expires_at,
        expiredIn: data.expires_in
      })

      // Show noti
      $toast.success('Login successfully!')
      if (callback) { callback() }
    } catch (error) {
      $toast.error('Username or Password is incorrect!')
    }
    state.loading = false
  }
  const signUp = () => {

  }
  const signOut = () => {
    authStore.loadTokenInfo({ key: '', expiredDate: '', expiredIn: 0 })
  }

  return {
    // State
    ...storeToRefs(authStore),
    ...toRefs(state),

    // Method
    signIn,
    signUp,
    signOut
  }
}