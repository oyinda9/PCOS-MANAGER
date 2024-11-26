// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  plugins: ['~/plugins/VCal.js'],
  css: [
    '@/assets/css/tailwind.css',  // Add this line to include Tailwind CSS
  
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
     
    },
  },

  // Add vue-cal plugin correctly
  plugins: [
    { src:'./plugins/vue-cal.js', mode: 'client' },  // Include the plugin for vue-cal
  ],
  vite: {
    optimizeDeps: {
      include: [
        '@fullcalendar/vue3',
        '@fullcalendar/core',
        '@fullcalendar/daygrid',
      ],
    },
  },
})
