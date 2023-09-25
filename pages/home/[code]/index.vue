<script setup lang="ts">
import { useRoute } from 'nuxt/app';
import { ref, computed } from 'vue';
import { Country } from './_generated/operations';
import { execCountriesQuery } from '@/composables/api';

const route = useRoute();
const { countries, loading, error } = execCountriesQuery();
const countryCode = ref<string | null>(route.query.code || null);

const getCountry = computed(() => {
    if (!countries.value || loading.value || !countryCode.value) {
        return undefined;
    }

    return countries.value.find(
        (country: Country) => country.code === countryCode.value
    );
});

</script>

<template>
    <div v-if="loading">
        <el-progress type="dashboard"></el-progress>
    </div>
    <div v-if="error">
      {{ error }}
    </div>
    <div v-else-if="getCountry">
        {{ getCountry.name }}
           {{ getCountry }}
              {{ getCountry.emoji }}
    </div>
</template>