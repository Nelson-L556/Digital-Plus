let formInput = document.querySelector(".footer__input");
const btn = document.querySelector(".footer__btn");
const suscribir = document.querySelector(".footer__suscribir");

//* EVENTOS
btn.addEventListener("click", (e) => {
    e.preventDefault();
    
    const leer = formInput.value.trim(); // Elimina espacios en blanco

    if (leer === "") {
        generarAlerta("Es necesario completar el campo", "error");
        return;
    } else {
        generarAlerta("¡Se ha suscrito con éxito!", "valido");
        formInput.value = ""; // Limpiar input después de suscribirse
    }
});

function generarAlerta(mensaje, tipo) {
    // Eliminar mensajes previos
    const alertaExistente = document.querySelector(".mensaje");
    if (alertaExistente) {
        alertaExistente.remove();
    }

    // Crear nueva alerta
    const alerta = document.createElement("p");
    alerta.textContent = mensaje;
    alerta.classList.add("mensaje", tipo); // Agregar clase según el tipo

    // Agregar la alerta al contenedor
    suscribir.appendChild(alerta);

    // Eliminar la alerta después de unos segundos
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}
