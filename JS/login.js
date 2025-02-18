// Seleccionar todos los elementos con la clase 'login__label' y 'login__input'
const inputs = document.querySelectorAll(".login__input");
const email = document.querySelector(".login__email");
const password = document.querySelector(".login__password");
const boton = document.querySelector(".btn");
const form = document.querySelector(".login__alerta")

inputs.forEach(input => {
    // Encontrar el label correspondiente utilizando el atributo 'for'
    const label = document.querySelector(`label[for="${input.id}"]`);
    
    // Evento focus: cuando el input obtiene el foco
    input.addEventListener("focus", () => {
        label.classList.add("trans"); // Agrega la clase "trans" al label
    });
    
    // Evento blur: cuando el input pierde el foco
    input.addEventListener("blur", () => {
        if(input.value.trim() === ""){
            label.classList.remove("trans");
        }
    });
});


boton.addEventListener("click", (e) =>{
    validarInformacion();
    e.preventDefault()
})


function validarInformacion(){
    const valorEmail = email.value;

    const valorPassword = password.value

    if(valorEmail == "" || valorPassword == ""){
        const alertaError = document.createElement("p")
        alertaError.classList.add("error");
        alertaError.textContent = ("Introduzca todos los campos correctamente")
        form.appendChild(alertaError);
        setTimeout(() => {
            alertaError.remove()
        }, 3000);
    } else{
        const alertaValido = document.createElement("p")
        alertaValido.classList.add("valido");
        alertaValido.textContent = ("Ha iniciado sesión correctamente")
        form.appendChild(alertaValido);
        setTimeout(() => {
            alertaValido.remove()
        }, 5000);
    }
}
