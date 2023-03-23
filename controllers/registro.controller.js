import { clientServices } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  clientServices
    .clientCreate(name, email)
    .then(() => {
      window.location.href = "/screens/registro_completado.html";
    })
    .catch((error) => console.log(error));
});
