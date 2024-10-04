import AutoImport from 'unplugin-auto-import/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  // devtools: { enabled: true },
  ssr: true,
  srcDir: './src',
  modules: [
    '@nuxt/eslint', 
    '@pinia/nuxt',
    '@pinia/nuxt',
  ],
  css: [
    '~/assets/css/style.css',
    '~/assets/css/swiper/swiper-bundle.min.css',
  ],
  experimental: {
    renderJsonPayloads: false
  },
  components: [
    { path: '~/features/home/ui', pathPrefix: false, extensions: ['.vue'] },
    { path: '~/features/sport/ui', pathPrefix: false, extensions: ['.vue'] },
    { path: '~/features/casino/ui', pathPrefix: false, extensions: ['.vue'] },
    { path: '~/features/slot/ui', pathPrefix: false, extensions: ['.vue'] },
    { path: '~/features/card/ui', pathPrefix: false, extensions: ['.vue'] },
    { path: '~/features/lottery/ui', pathPrefix: false, extensions: ['.vue'] },
    { path: '~/features/fishing/ui', pathPrefix: false, extensions: ['.vue'] },
     '~/components'
  ],
  runtimeConfig: {
    public: {
      API_ENDPOINT: "https://cms.t79.bet/api",
    }
  },
  vite: {
    plugins: [
      AutoImport({
        imports: ['pinia'],
        vueTemplate: true,
        dirs: [
          './src/hooks',
          './src/stores',
        ],
        dts: './src/@types/auto-imports.d.ts',
      })
    ]
  }
})