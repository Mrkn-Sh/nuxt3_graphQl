// composables/apollo/index.ts

import { ApolloClient, InMemoryCache } from '@apollo/client/core';

// Apollo Client 
const apolloClient = new ApolloClient({
  uri: process.env.NUXT_ENV_GRAPHQL_URL,
  cache: new InMemoryCache(),
});


export { apolloClient }; 
