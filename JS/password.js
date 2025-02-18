const email = document.querySelector(".login__email");
const form = document.querySelector(".login__alerta");
const btn = document.querySelector(".btn");
const input = document.querySelector(".login__input");
const label = document.querySelector(".login__label");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    alerta();
})

input.addEventListener("focus", () =>{
    label.classList.add("trans")
})

input.addEventListener("blur", () => {
    if(input.value.trim() === ""){
        label.classList.remove("trans")
    }
})

function alerta(){
    const valorEmail = email.value;
    if(valorEmail == ""){
       let mensaje = valorEmail;
       mensaje = document.createElement("p");
       mensaje.classList.add("error");
       mensaje.textContent = ("Introduzca un correo eléctronico")
       form.appendChild(mensaje);
       setTimeout(() => {
            form.remove();
       }, 4000);
    } else {
        let mensaje = valorEmail;
        mensaje = document.createElement("p");
        mensaje.classList.add("valido");
        mensaje.textContent = (`Se ha enviado el código al correo: ${valorEmail}`);
        form.appendChild(mensaje);
        setTimeout(() => {
            form.remove();
        }, 5000);
    }
}