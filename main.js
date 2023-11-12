const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.style.display = 'flex';
})

cerrar.addEventListener("click", () => {
    nav.style.display = 'none';
})

const navBackground = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 0) {
        navBackground.style.backgroundColor = "rgba(39, 137, 176, 0.5)";
    } else {
        navBackground.style.backgroundColor = "transparent";
    }
});
