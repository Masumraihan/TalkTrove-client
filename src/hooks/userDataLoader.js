import { useQuery } from "@tanstack/react-query";

const useDataLoader = (route) => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: [route],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/${route}`);
      const data = await res.json();
      return data;
    },
  });
  return [data, refetch, isLoading];
};
export default useDataLoader;
