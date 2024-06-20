// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts", '@vee-validate/nuxt'],
  css: ['~/assets/css/globals.scss'],
  googleFonts: {
    families: {
      "Roboto": [400, 700]
    }
  },
})