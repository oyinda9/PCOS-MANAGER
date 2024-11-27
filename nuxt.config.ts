// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
 
  css: [
    '@/assets/css/tailwind.css',  // Add this line to include Tailwind CSS
  
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
     
    },
  },
})
