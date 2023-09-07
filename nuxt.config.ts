// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      graphqlUrl: "http://localhost:3001/graphql",
    },
  },
  vite: {
    plugins: [], // Allow usage of .gql/.graphql files
  },
   modules: [
    '@element-plus/nuxt'
  ],
  elementPlus: { /** Options */ }
});
