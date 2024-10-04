import type { FetchOptions, FetchRequest } from 'ofetch'
import { ofetch as $fetch } from 'ofetch'
import { defu } from 'defu'

export async function $api<T = unknown>(
  request: FetchRequest,
  options?: FetchOptions,
) {

  const config = useRuntimeConfig()

  const headers: HeadersInit = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }

  const defaultConfig: FetchOptions = {
    baseURL: config.public.API_ENDPOINT,
    headers,
    async onRequest({ options }) {
      // if (authStore.hasTokenExpired) {
      //   // TODO: Refresh token
      //   Object.assign(options, {
      //     headers: {
      //       Authorization: `Bearer ${access_token}`,
      //     },
      //   })
      // }
    },
    async onResponseError(ctx) {
      if (ctx.response.status === 401) {
        // TODO: SignOut (Your session has expired. Please sign in again.)
      }
    },
  }

  return $fetch<T>(
    request,
    defu(options, defaultConfig) as FetchOptions<'json'>,
  )
}