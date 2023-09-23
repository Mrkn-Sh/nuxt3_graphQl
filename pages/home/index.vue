<script setup lang="ts">
import { provideApolloClient } from '@vue/apollo-composable';
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { execCountriesQuery } from '@/composables/api';

const apolloClient = new ApolloClient({
  uri: "http://localhost:4000/graphql", 
  cache: new InMemoryCache(),
});

provideApolloClient(apolloClient);

const { countries, loading, error } = execCountriesQuery();
console.log("!!!!", countries.value)

</script>

<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error.message }}</div>
    <div v-if="countries && countries.length">
      <ul>
        <li v-for="(country, index) in countries" :key="index">
          {{ country }}
        </li>
      </ul>
    </div>
  </div>
</template>
