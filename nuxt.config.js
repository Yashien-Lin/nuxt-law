// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-22',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'static' // 在打包時自動產生靜態HTML(SSG)
  },
  css: [
    '@/assets/scss/app.scss',
    '@splidejs/splide/dist/css/splide.min.css'
  ],
  postcss: { // CSS 屬性加上瀏覽器相容性前綴
    plugins: {
      autoprefixer: true
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/components/_typography.scss";
            @import "@/assets/scss/components/_grid.scss";
            @import "@/assets/scss/components/_color.scss";
						@import "@/assets/scss/components/_mixin.scss";
          `
        }
      }
    }
  },
  loadingIndicator: {
    name: 'circle',
    color: '#3B82F6',
    background: 'white',
  },
  typescript: {
    typeCheck: true
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE || 'http://localhost:3001'
    }
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
})
