import { useCountriesQuery, Country } from "./_generated/operations";

export const execCountriesQuery = () => {
  const { loading, error, result } = useCountriesQuery({
    fetchPolicy: "no-cache"
  });

  const countries = ref<Country[]>([]);

  watch(result, (newVal: any) => {
    if (newVal?.countries) {
      countries.value = newVal.countries;
    }
    console.log("Updated countries:", countries.value);
  });

  return {
    loading,
    error,
    countries
  };
};
