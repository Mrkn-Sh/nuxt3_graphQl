// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      graphqlUrl: "http://localhost:8080/graphql",
    },
  },
  modules: ["@element-plus/nuxt", "@nuxtjs/apollo"],
  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://graphqlzero.almansi.me/api",
        httpLinkOptions: {
          headers: {
            "Content-Type": "application/json",
          },
        },
      },
    },
  },
});
