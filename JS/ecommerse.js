//* VARIABLES
const siguiente = document.querySelector(".ecommerse__siguiente");
const anterior = document.querySelector(".ecommerse__anterior");
const headers = document.querySelectorAll(".ecommerse__header");

let indiceActual = 0;

//* EVENTOS
siguiente.addEventListener('click', siguienteContenedor);
anterior.addEventListener('click', anteriorContenedor);

//* FUNCIONES

function mostrarContenedor(indice) {
    headers.forEach((header) => {
        header.style.opacity = "0";
        header.style.visibility = "hidden";
        header.style.transition = "opacity .5s ease-in-out";
    });

    // Mostrar solo la imagen actual con transición suave
    headers[indice].style.opacity = "1";
    headers[indice].style.visibility = "visible";
}

//* Función para avanzar en el carrusel
function siguienteContenedor() {
    indiceActual = (indiceActual + 1) % headers.length;
    mostrarContenedor(indiceActual);
}

//* Función para retroceder en el carrusel
function anteriorContenedor() {
    indiceActual = (indiceActual - 1 + headers.length) % headers.length;
    mostrarContenedor(indiceActual);
}

//* Mostrar la primera imagen al cargar la página
mostrarContenedor(indiceActual);

setInterval(siguienteContenedor, 3000);
