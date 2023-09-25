// api.ts
import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { provideApolloClient } from '@vue/apollo-composable';
import { useCountriesQuery, Country } from './_generated/operations';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

provideApolloClient(apolloClient);

export const execCountriesQuery = () => {
  const { loading, error, result } = useCountriesQuery({
    fetchPolicy: 'no-cache',
  });

  const countries = ref<Country[]>([]);

  watch(result, (newVal: any) => {
    if (newVal?.countries) {
      countries.value = newVal.countries;
    }
  });

  return {
    loading,
    error,
    countries,
  };
};
