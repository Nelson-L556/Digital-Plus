//* Variables 
const contactoBtn = document.querySelector(".soporte__btn");
const asunto = document.querySelector(".contacto__asunto");
const nombre = document.querySelector(".contacto__nombre");
const email = document.querySelector(".contacto__email");
const mensaje = document.querySelector(".contacto__mensaje");
const fecha = document.querySelector(".contacto__fecha");
const formulario = document.querySelector(".formulario");

const datos = {
    asunto:  "",
    nombre:  "",
    email:  "",
    mensaje: "",
    fecha: "",
}

//* Contacto
nombre.addEventListener("change", leerTexto);
email.addEventListener("change", leerTexto);
mensaje.addEventListener("change", leerTexto);
fecha.addEventListener("change", leerTexto);
nombre.addEventListener("change", leerTexto);


contactoBtn.addEventListener("click", (event) => {
    event.preventDefault()
    // leerValorNombre();

    const { nombre, email, mensaje, fecha} = datos;
    if(nombre ==="" || email === "" || mensaje === ""  || fecha === ""){
        mostrarAlerta("Complete todos los campos", true);
        return
    } else {
        mostrarAlerta("Mensaje enviado correctamente")
    }
})


// function leerValorNombre(){
//     const valorNombre = inputNombre.value
//     const elemento = document.createElement("p");
//     elemento.classList.add("nombre")
//     elemento.textContent = valorNombre;
//     formulario.appendChild(elemento);
    
//     setTimeout(() => {
//         elemento.remove();
//     }, 3000);
// }

function leerTexto(event){
    datos[event.target.name] = event.target.value;
    console.log(datos);
}

function mostrarAlerta (mensaje, error = null){
    const alerta = document.createElement("p")
    alerta.textContent = mensaje

    if(error){
        alerta.classList.add("error");
    } else{
        alerta.classList.add("correcto");
    }
    formulario.appendChild(alerta);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}
