const botonLogin = document.querySelector(".login_action")
const botonCrear = document.querySelector(".create_action")
const salirLogin = document.querySelector(".cancel_login")
const salirCreate = document.querySelector(".cancel_create")
const loginContainer = document.querySelector(".login")
const createContainer = document.querySelector(".create")
/* function abrirLogin () {
    const usuarioLogin = document.querySelector("#login_section")
    const loginContainer = document.createElement("div")
    loginContainer.className = "login"
    loginContainer.innerHTML = `
        <div id="login">
            <div class="container_login">
                <form class="login_form bg-white">
                    <div class="container">
                        <div class="mb-3">
                            <h2 class="text-dark">Iniciar Sesión</h2>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label text-dark">Email</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="nombre@example.com">
                        </div>
                        <div class="mb-3">
                            <label for="contraseña" class="form-label text-dark">Contraseña</label>
                            <input type="password"  class="form-control" id="exampleFormControlInput2" placeholder="*****"  pattern="[a-zA-Z0-9]{6,15}" title="Una contraseña válida debe estar compuesta por letras y/o números y tener una longitud entre 6 y 15 caracteres" required>
                        </div>
                        <div class="mb-3">
                            <input type="submit" class="login_button btn btn-outline-info text-primary" value="Ingresar">
                            <input type="button" class="cancel_button btn btn-outline-info text-primary" value="Cancelar">
                        </div>
                    </div>
                </form>
            </div>
        </div>
    `
    usuarioLogin.appendChild(loginContainer)
    loginContainer.style.display = "block"
} */

/* const botonSalir = document.querySelector(".cancel_button") */

botonLogin.onclick = () => {
    loginContainer.style.display = "block"
}

botonCrear.onclick = () =>{
    createContainer.style.display = "block"
}

salirLogin.onclick = () => {
    loginContainer.style.display = "none"
}
salirCreate.onclick = () => {
    createContainer.style.display = "none"
}
