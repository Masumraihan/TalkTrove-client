export const addUser = (name, email, photo) => {
  const currentUser = {
    name,
    email,
    photo,
  };
  fetch(`${import.meta.env.VITE_BASE_URL}/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};

export const getRole = async (email) => {
  const res = await fetch(`${import.meta.env.VITE_BASE_URL}/users/${email}`);
  const user = await res.json();
  return user?.role;
};
