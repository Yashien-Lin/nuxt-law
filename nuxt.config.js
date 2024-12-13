// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-22',
  devtools: { enabled: true },
  css: ['@/assets/scss/app.scss'],
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
  nitro: {
    plugins: [
      '@/server/index'
    ]
  },
  typescript: {
    typeCheck: true
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
})
