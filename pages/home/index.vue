<script setup lang="ts">
import { execCountriesQuery } from '@/composables/api';

const { countries, loading, error } = execCountriesQuery();
console.log("!!!!", countries.value);
</script>

<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error.message }}</div>
    <div v-if="countries && countries.length">
      <ul>
        <li v-for="(country, index) in countries" :key="index">
          {{ country.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
