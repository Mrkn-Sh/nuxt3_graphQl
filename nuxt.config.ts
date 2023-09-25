export default defineNuxtConfig({
  devtools: { enabled: true },
  buildModules: ["@nuxtjs/apollo"], 
  modules: ["@element-plus/nuxt"],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:4000/graphql',
      },
    },
  },
});
