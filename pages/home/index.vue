<script setup lang="ts">
import { useApolloClient } from '~/composables/apollo'; 
import gql from 'graphql-tag';

const client = useApolloClient();

const data = ref(null);

const fetchData = async () => {
  const QUERY = gql`
    {
      countries {
        code
        name
      }
    }
  `;

  try {
    const result = await client.query({ query: QUERY });
    data.value = result.data;
  } catch (error) {
    console.error("GraphQL 쿼리 중 오류가 발생했습니다.", error);
  }
};

fetchData();
</script>

<template>
  <div>
    홈
    <div v-if="data">
      <div v-for="country in data.countries" :key="country.code">
        {{ country.name }}
      </div>
    </div>
    <div v-else>데이터 로딩 중...</div>
  </div>
</template>
