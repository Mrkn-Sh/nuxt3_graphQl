// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'; 

export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      graphqlUrl: "http://localhost:3001/graphql",
    },
  },
  vite: {
    resolve: {
      alias: {
        '~/': resolve(__dirname, './')
      }
    },
    plugins: [], // Allow usage of .gql/.graphql files
  },
   modules: [
    '@element-plus/nuxt'
  ],
  elementPlus: { /** Options */ },
  components: true
});
