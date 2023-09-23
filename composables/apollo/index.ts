import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { apolloClient } from '~/apolloClient';

export function useCountries() {
  const state = reactive({
    countries: [],
    loading: false,
    error: null,
  });

  const GET_COUNTRIES = gql`
    {
      countries {
        code
        name
        emoji
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_COUNTRIES, {
    client: apolloClient,
  });

  if (loading) {
    state.loading = true;
  } else if (error) {
    state.error = error;
  } else if (data) {
    state.countries = data.countries;
    state.loading = false;
  }

  return state;
}
