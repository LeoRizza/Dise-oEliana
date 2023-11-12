const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.style.display = 'flex';
})

cerrar.addEventListener("click", () => {
    nav.style.display = 'none';
})