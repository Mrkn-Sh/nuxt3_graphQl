// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      graphqlUrl: "http://localhost:3001/graphql",
    },
  },
  build: {
    // Remove or comment out the following line to exclude React as an external dependency
    // external: ['react'],
  },
  modules: [
    '@element-plus/nuxt'
  ],
  elementPlus: { /** Options */ },
  components: true
});
