export const useCases = () => {
  const config = useRuntimeConfig();
  return useFetch(`${config.public.apiBase}/api/cases?populate=*`, {
    key: "cases",
  });
};
