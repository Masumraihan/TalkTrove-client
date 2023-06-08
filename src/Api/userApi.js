export const addUser = (name, email, photo) => {
  const currentUser = {
    name,
    email,
    photo,
    role: "student",
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
