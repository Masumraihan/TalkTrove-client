export const loadData = async (route) => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/${route}`);
  const data = await res.json();
  return data;
};
