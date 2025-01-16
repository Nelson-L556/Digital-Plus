//* Variabeles
const iconoCerrar = document.querySelector(".icono__cerrar");
const navegacionBusqueda = document.querySelector(".navegacion__iconos");
const fondoBusqueda = document.querySelector(".navegacion__fondo");
const fondoSearch = document.querySelector(".form");
const menu = document.querySelector(".navegacion");
const inputBusqueda = document.querySelector(".navegacion__search")
const iconoBuscar = document.querySelector(".icono__busqueda");
const busquedabtn = document.querySelector(".navegacion__btn");

//* Eventos
iconoBuscar.addEventListener("click", () =>{
    abrirMenuBusqueda();
})

iconoCerrar.addEventListener("click", () => {
    cerrarMenuBusqueda();
})

busquedabtn.addEventListener("click", () => {
    leerInput();
})

inputBusqueda.addEventListener("input", () => {
    generarValorBtn();
})


//* Funciones
function abrirMenuBusqueda() {
    navegacionBusqueda.classList.add("fondo");
    iconoCerrar.classList.remove("oculto");
    fondoBusqueda.classList.add("visible");
    fondoSearch.classList.add("visible");
    iconoBuscar.classList.add("oculto")
    navegacionBusqueda.classList.add("f-start")
    iconoCarrito.classList.add("oculto")
}

function cerrarMenuBusqueda() {
    iconoCerrar.classList.add("oculto")
    iconoBuscar.classList.remove("oculto")
    navegacionBusqueda.classList.remove("fondo");
    fondoBusqueda.classList.remove("visible");
    fondoSearch.classList.remove("visible");
    navegacionBusqueda.classList.remove("f-start")
    iconoCarrito.classList.remove("oculto")
}

function leerInput(){
    let valor = inputBusqueda.value;
    return valor;
}

function generarValorBtn() {
    let valorBtn = leerInput();
    busquedabtn.textContent = `Buscar: "${valorBtn}"`;
}
