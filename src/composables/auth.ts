import { $api } from "~/hooks/http-client"
import { $toast } from "~/hooks/toast"
import { useAuthStore } from "~/store/auth"
import type { TLoginRequest, TLoginResponse, TTokenInfo } from "~/types/auth"

export const useAuth = () => {
  const authStore = useAuthStore()
  const token = useCookie('token')

  authStore.loadTokenInfo((token.value || {
    key: '',
    expiredDate: '',
    expiredIn: 0
  }) as TTokenInfo)

  // Method
  const signIn = async ({ lang = 'vi', username, password }: TLoginRequest) => {
    try {
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
      token.value = JSON.stringify({
        key: data.access_token,
        expiredDate: data.expires_at,
        expiredIn: data.expires_in
      })
      
      authStore.loadTokenInfo({ 
        key: data.access_token,
        expiredDate: data.expires_at,
        expiredIn: data.expires_in
      })
      $toast.success('Login successfully!')
    } catch (error) {
      $toast.error('Username or Password is incorrect!')
    }
  }
  const signUp = () => {

  }
  const signOut = () => {
    token.value = ''
    document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    authStore.loadTokenInfo({ key: '', expiredDate: '', expiredIn: 0 })
  }

  return {
    // State
    ...storeToRefs(authStore),

    // Method
    signIn,
    signUp,
    signOut
  }
}