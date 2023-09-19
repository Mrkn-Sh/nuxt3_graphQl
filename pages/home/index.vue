<script setup lang="ts">
import { ref, watch } from 'vue';
import { provideApolloClient, useQuery } from '@vue/apollo-composable';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
import gql from 'graphql-tag';

type Country = {
  code: string;
  name: string;
  emoji: string;
  capital: string;
  currencies: string[];
  awsRegion?: string; // awsRegion은 optional로 처리
  currency?: string;  // currency도 optional로 처리
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
    console.log('DataRef updated:', newVal);
    result.value = newVal;
    console.log('Result updated:', result.value);
  });
}
console.log('data', result.value)
</script>

<template>
  <div>
    Home
    <div v-if="loading">
      데이터 로딩 중...
    </div>
    <div v-else-if="error">
      데이터를 불러오는 중에 오류가 발생했습니다: {{ error.message }}
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
