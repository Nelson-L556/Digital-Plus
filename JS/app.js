//* Variabeles
const iconoCerrar = document.querySelector(".icono__cerrar");
const navegacionBusqueda = document.querySelector(".navegacion__iconos");
const fondoBusqueda = document.querySelector(".navegacion__fondo");
const fondoSearch = document.querySelector(".form");
const menu = document.querySelector(".navegacion");
const inputBusqueda = document.querySelector(".navegacion__search")
const iconoBuscar = document.querySelector(".icono__busqueda");
const busquedabtn = document.querySelector(".navegacion__btn");
const iconoMenu = document.querySelector(".icono__menu");
const navegacionEnlaces = document.querySelector(".navegacion__enlaces");
const iconoCarrito = document.querySelector(".icono__carrito");
const logo = document.querySelector(".navegacion__imagen");
const iconoCerrarMenu = document.querySelector(".icono__cerrar-menu");
const navegacionTitulo = document.querySelector(".navegacion__titulo-menu");
const redesSociales = document.querySelector(".navegacion__redes");



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


iconoMenu.addEventListener("click", () => {
    abrirMenu();
})

iconoCerrarMenu.addEventListener("click", () => {
    cerrarMenu();
})

//* Funciones
function abrirMenuBusqueda() {
    navegacionBusqueda.classList.add("fondo");
    iconoCerrar.classList.remove("oculto");
    fondoBusqueda.classList.add("visible");
    fondoSearch.classList.add("visible");
    iconoBuscar.classList.add("oculto")
    navegacionBusqueda.classList.add("f-start")
    document.body.classList.add('no-scroll');
}

function cerrarMenuBusqueda() {
    iconoCerrar.classList.add("oculto")
    iconoBuscar.classList.remove("oculto")
    navegacionBusqueda.classList.remove("fondo");
    fondoBusqueda.classList.remove("visible");
    fondoSearch.classList.remove("visible");
    navegacionBusqueda.classList.remove("f-start")
    document.body.classList.remove('no-scroll');

}

function leerInput(){
    let valor = inputBusqueda.value;
    return valor;
}

function generarValorBtn() {
    let valorBtn = leerInput();
    busquedabtn.textContent = `Buscar: "${valorBtn}"`;
}

function abrirMenu() {
    navegacionBusqueda.classList.add("navegacion__fondo-menu")
    navegacionEnlaces.classList.add("visible");
    iconoMenu.classList.add("oculto")
    document.body.classList.add('no-scroll');
    iconoBuscar.classList.add("oculto");
    iconoCarrito.classList.add("oculto");
    logo.classList.add("oculto")
    iconoCerrarMenu.classList.remove("oculto");
    navegacionTitulo.classList.remove("oculto")
    redesSociales.classList.remove("oculto")

}

function cerrarMenu(){
    navegacionBusqueda.classList.remove("navegacion__fondo-menu")
    navegacionEnlaces.classList.remove("visible");
    iconoMenu.classList.remove("oculto")
    document.body.classList.remove('no-scroll');
    iconoBuscar.classList.remove("oculto");
    iconoCarrito.classList.remove("oculto");
    logo.classList.remove("oculto")
    iconoCerrarMenu.classList.add("oculto");
    navegacionTitulo.classList.add("oculto")
    redesSociales.classList.add("oculto")
}


