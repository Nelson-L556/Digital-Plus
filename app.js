const btnServicios = document.querySelectorAll(".bento__btn");

// Agregamos un listener a cada botón
btnServicios.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del enlace
        console.log(`Has hecho clic en: ${btn.parentElement.querySelector(".bento__titulo").textContent}`);
    });
});
