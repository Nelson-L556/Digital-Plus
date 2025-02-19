const email = document.querySelector(".login__email");
const password = document.querySelector(".login__password");
const confirmarPassword = document.querySelector(".login__confirmar");
const boton = document.querySelector(".btn")
const label = document.querySelectorAll(".login__label");
const inputs = document.querySelectorAll(".login__input");
const form = document.querySelector(".login__alerta")

boton.addEventListener("click",(e) => {
    e.preventDefault();
    confirmarContraseña();
})

inputs.forEach(input => {
    const label = document.querySelector(`label[for="${input.id}"]`);

    input.addEventListener("focus", () => {
        label.classList.add("trans");
    });

    input.addEventListener("blur", () => {
        if(input.value.trim() === ""){
            label.classList.remove("trans");
        }
    })
})

function confirmarContraseña() {
    const valorContraseña = password.value.trim()
    const valorContraseñaConfirmar = confirmarPassword.value.trim()
    const valorEmail = email.value.trim();
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para correos válidos

    if(!regexCorreo.test(valorEmail)){
        const valorEmail = document.createElement("p");
        valorEmail.classList.add("error");
        valorEmail.textContent = "Introduzca un correo eléctronico valido";
        form.appendChild(valorEmail);
        setTimeout(() => {
            valorEmail.remove();
        }, 3000);

    } else{
        if(valorContraseña === "" || valorContraseñaConfirmar == ""){
            const validarPassword = document.createElement("p");
            validarPassword.classList.add("error");
            validarPassword.textContent = "Escriba una contraseña";
            form.appendChild(validarPassword);
            setTimeout(() => {
                validarPassword.remove();
            }, 3000);
        } else{
            if(valorContraseña === valorContraseñaConfirmar){
                const validarPassword = document.createElement("p");
                validarPassword.classList.add("valido");
                validarPassword.textContent = "Se ha registrado correctamente!";
                form.appendChild(validarPassword);
                setTimeout(() => {
                    validarPassword.remove();
                }, 3000);
            } else{
                const validarPassword = document.createElement("p");
                validarPassword.classList.add("error");
                validarPassword.textContent = "Las contraseñas no coinciden";
                form.appendChild(validarPassword);
                setTimeout(() => {
                    validarPassword.remove();
                }, 3000);
            }
    }

        
    }
}
