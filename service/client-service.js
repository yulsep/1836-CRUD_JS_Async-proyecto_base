const clientList = () =>
  fetch("http://localhost:3000/profile").then((response) => response.json());

const clientCreate = (name, email) => {
  return fetch("http://localhost:3000/profile", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, id: uuid.v4() }),
  });
};

const deleteClient = (id) => {
  console.log("Elimina a", id);
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "DELETE",
  });
};

const clientDetail = (id) => {
  return fetch(`http://localhost:3000/profile/${id}`).then((response) =>
    response.json()
  );
};

const clientUpdate = (name, email, id) => {
  return fetch(`http://localhost:3000/profile/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email }),
  })
    .then((response) => response)
    .catch((error) => console.log(error));
};

export const clientServices = {
  clientList,
  clientCreate,
  deleteClient,
  clientDetail,
  clientUpdate,
};
