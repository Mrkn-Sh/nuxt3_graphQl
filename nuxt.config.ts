export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      graphqlUrl: "https://countries.trevorblades.com/",
    },
  },
  buildModules: ["@nuxtjs/apollo"], 
  modules: ["@element-plus/nuxt"],
  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:4000/graphql',
        httpLinkOptions: {
          headers: {
            "Content-Type": "application/json",
          },
        },
      },
    },
  },
});
