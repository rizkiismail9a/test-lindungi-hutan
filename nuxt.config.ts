// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  pages: true,
  modules: ["@pinia/nuxt"],
  devtools: { enabled: false },
  devServer: {
    port: 8000,
  },
  runtimeConfig: {
    public: {
      baseUri: process.env.BASE_URI,
    },
  },
});
