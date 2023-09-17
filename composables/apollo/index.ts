// composables/apollo/index.ts

import { ApolloClient, InMemoryCache } from '@apollo/client/core';

// Apollo Client 초기화 및 설정
const apolloClient = new ApolloClient({
  uri: 'http://localhost:8080/graphql', 
  cache: new InMemoryCache(),
});

export { apolloClient }; 
