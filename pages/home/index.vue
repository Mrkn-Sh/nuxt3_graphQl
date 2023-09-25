<script setup lang="ts">
import { execCountriesQuery } from '@/composables/api';
import { ref, computed } from "vue";
import { useRouter } from 'nuxt/app';

const { countries, loading, error } = execCountriesQuery();
const search = ref<string>('');

const filterCountries = computed(() => {
  if (!countries.value) {
    return [];
  }

  return countries.value.filter((country) =>
    !search.value || (country.name && country.name.toLowerCase().includes(search.value.toLowerCase()))
  );
});

const gotoDetail = (code: string) => {
  const router = useRouter()
  router.push({
    path: `/Home/${code}`,
    query: { code: code },
  });
};
</script>

<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error.message }}</div>
    <div v-if="countries && countries.length">
      <el-table :data="filterCountries">
        <el-table-column label="Flag" prop="emoji" />
        <el-table-column label="Country" prop="name" />
        <el-table-column align="right">
          <template #header>
            <el-input v-model="search" size="small" placeholder="Type to search" />
          </template>
          <template #default="scope">
            <el-button @click="gotoDetail(scope.row.code)">国詳細へ</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
