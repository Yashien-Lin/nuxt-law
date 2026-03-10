export const useServices = () => {
  const config = useRuntimeConfig();
  return useFetch(`${config.public.apiBase}/api/services`, {
    key: "services",
  });
};
