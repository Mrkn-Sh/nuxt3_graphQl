<script setup lang="ts">
import { ref, watch } from 'vue';
import { provideApolloClient, useQuery } from '@vue/apollo-composable';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
import gql from 'graphql-tag';
import svg from '@/assets/loading.svg'

type Country = {
  code: string;
  name: string;
  emoji: string;
  capital: string;
  currencies: string[];
  awsRegion?: string; 
  currency?: string;  
};

const loading = ref(true);
const error = ref(null);
const result = ref<{ countries?: Country[] }>({});

if (typeof window !== "undefined") {
  const httpLink = new HttpLink({
    uri: "https://countries.trevorblades.com/",
  });

  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });

  provideApolloClient(apolloClient);

  const QUERY = gql`
    query {
      countries {
        code
        name
        emoji
        capital
        currencies
        awsRegion
        currency
      }
    }
  `;

  const { loading: loadingRef, error: errorRef, result: dataRef } = useQuery(QUERY);

  watch(loadingRef, newVal => {
    loading.value = newVal;
  });

  watch(errorRef, newVal => {
    error.value = newVal;
  });

  watch(dataRef, newVal => {
    result.value = newVal;
  });
}
</script>

<template>
  <div>
    Home
    <div v-if="loading">
    <el-table v-loading="loading"
      element-loading-text="Loading..."
      :element-loading-spinner="svg"
      element-loading-svg-view-box="-10, -10, 50, 50"
      element-loading-background="rgba(122, 122, 122, 0.8)" 
    />
    </div>
    <div v-else-if="error">
      데이터를 불러오는 중에 오류가 발생했습니다
    </div>
  <div v-else-if="result.countries && result.countries.length">
    <div v-for="(country, index) in result.countries" :key="index">
      name: {{ country.name }} <br />
      code:  {{ country.code }} <br />
      capital: {{ country.capital }} <br />
      emoji : {{ country.emoji }}
    </div>
  </div>
  </div>
</template>
