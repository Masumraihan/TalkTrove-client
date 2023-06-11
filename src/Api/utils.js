export const loadData = async (route) => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/${route}`);
  const data = await res.json();
  return data;
};
export const imageUpload = async (img) => {
  const formData = new FormData();
  formData.append("image", img);
  const url = `https://api.imgbb.com/1/upload?key=${
    import.meta.env.VITE_IMAGE_UPLOAD_KEY
  }`;
  const res = await fetch(url, {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  return data;
};

