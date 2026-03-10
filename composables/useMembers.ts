export const useMembers = () => {
  const config = useRuntimeConfig();
  return useFetch(`${config.public.apiBase}/api/authors?populate=*`, {
    key: "members",
  });
};
