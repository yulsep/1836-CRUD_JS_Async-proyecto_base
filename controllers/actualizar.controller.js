import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  if (id === null) {
    window.location.href = "/screens/error.html";
  }

  const name = document.querySelector("[data-nombre]");
  const email = document.querySelector("[data-email]");

  try {
    const profile = await clientServices.clientDetail(id);
    if (profile.name && profile.email) {
      name.value = profile.name;
      email.value = profile.email;
    } else {
      throw new Error("No se encontró el perfil");
    }
  } catch (error) {
    console.log("Catch error - ", error);
    window.location.href = "/screens/error.html";
  }
};

obtenerInformacion();

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const url = new URL(window.location);
  const id = url.searchParams.get("id");

  const name = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  console.log(name, " ", email);
  clientServices.clientUpdate(name, email, id).then(() => {
    window.location.href = "/screens/edicion_concluida.html";
  });
});
