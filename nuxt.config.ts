export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
       graphqlUrl: "https://countries.trevorblades.com/",
    },
  },
  modules: ["@element-plus/nuxt"],
  /*apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.NUXT_ENV_GRAPHQL_URL || "http://localhost:8080/graphql",
        httpLinkOptions: {
          headers: {
            "Content-Type": "application/json",
          },
        },
      },
    },
  },*/
});
