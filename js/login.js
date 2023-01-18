/* formulario de login-create */

function insaertLogin (){
    const container_LoginCreate= document.querySelector("#loginCreate")
    const divLoginCreate = document.createElement("div")
    divLoginCreate.className = "divloginCreate"
    divLoginCreate.innerHTML = `
    <div id="login_section">
            <div class="login">
                <div class="container_login">
                    <form id="login_form" class="bg-white">
                        <div class="mb-3">
                            <h2 class="text-dark">Iniciar Sesión</h2>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label text-dark">Email</label>
                            <input type="email" class="form-control" id="input_email" placeholder="nombre@example.com">
                        </div>
                        <div class="mb-3">
                            <label for="contraseña" class="form-label text-dark">Contraseña</label>
                            <input type="password"  class="form-control" id="input_pass" placeholder="*****"  pattern="[a-zA-Z0-9]{6,15}" title="Una contraseña válida debe estar compuesta por letras y/o números y tener una longitud entre 6 y 15 caracteres" required>
                        </div>
                        <input type="submit" class="login_button btn btn-outline-info text-primary" value="Ingresar">
                        <input type="button" class="cancel_login btn btn-outline-info text-primary" value="Cancelar">
                    </form>
                </div>
            </div>
        </div>
        <div id="create_section">
            <div class="create">
                <div class="container_create">
                    <form id="create_form" class="bg-white">
                        <div class="mb-1">
                            <h2 class="text-dark">Crear Usuario</h2>
                        </div>
                        <div class="mb-3">
                            <label for="text" class="form-label text-dark">Nombre</label>
                            <input type="text" name="nombre" class="form-control" id="input_name">
                        </div>
                        <div class="mb-3">
                            <label for="text" class="form-label text-dark">Apellido</label>
                            <input type="text" name="nombre" class="form-control" id="input_apellido">    
                        </div>
                        <div class="mb-3">
                            <label for="number" class="form-label text-dark">DNI</label>
                            <input type="number" class="form-control" id="create_dni" placeholder="11222333">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label text-dark">Email</label>
                            <input type="email" class="form-control" id="create_email" placeholder="nombre@example.com">
                        </div>
                        <div class="mb-3">
                            <label for="contraseña" class="form-label text-dark">Contraseña</label>
                            <input type="password"  class="form-control" id="create_pass" placeholder="*****"  pattern="[a-zA-Z0-9]{6,15}" title="Una contraseña válida debe estar compuesta por letras y/o números y tener una longitud entre 6 y 15 caracteres" required>
                        </div>
                        <div class="mb-1">
                            <input type="submit" class="login_button btn btn-outline-info text-primary" value="Ingresar">
                            <input type="button" class="cancel_create btn btn-outline-info text-primary" value="Cancelar">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `
    container_LoginCreate.appendChild(divLoginCreate)
}
insaertLogin()

/* DOM */

const botonLogin = document.querySelector(".login_action")
const botonCrear = document.querySelector(".create_action")
const salirLogin = document.querySelector(".cancel_login")
const salirCreate = document.querySelector(".cancel_create")
const loginContainer = document.querySelector(".login")
const createContainer = document.querySelector(".create")
const loginForm = document.querySelector("#login_form")
const inputEmail = document.querySelector("#input_email")
const inputPass = document.querySelector("#input_pass")
const cabeceraLogin = document.querySelector(".header__principal__cuenta")
const lsLogin = document.querySelector(".headre_principal_login")
const nombreUsuarioLs = document.querySelector(".nombre_usuario")
const cerrarSesion = document.querySelector(".close_action")


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
cerrarSesion.onclick = () => {
    lsLogin.style.display = "none"
    cabeceraLogin.style.display = "block"
    localStorage.removeItem("login")
    localStorage.removeItem("nombre")
    localStorage.removeItem("apellido")
    localStorage.removeItem("usuario")
    location.reload()
}

const subirAlLs = (clave , valor) =>{
    localStorage.setItem( clave , JSON.stringify(valor))
}

const traerDelLs = (clave) =>{
    return JSON.parse(localStorage.getItem(clave))
}

/* verificar si está logueado */

const validarUsuarioLogin = (clave)=>{
    if(clave == true){
        const verPagina = document.querySelector("title")
        const nombreEnLs = traerDelLs("nombre")
        lsLogin.style.display = "flex"
        cabeceraLogin.style.display = "none"
        const nombre = document.createElement("p")
        nombre.className = "nombre_usuario_login"
        if(verPagina.innerText == "Inicio - Tienda JacintoKids"){
            nombre.innerHTML=`
                ${nombreEnLs} de compras <img src="./img/client.png" alt="cliente" class="alto_1r">
            `
        }else {
            nombre.innerHTML=`
                ${nombreEnLs} de compras <img src="../img/client.png" alt="cliente" class="alto_1r">
            `
        }
        nombreUsuarioLs.appendChild(nombre)
    }
}

/* login */

loginForm.onsubmit = (event) =>{
    event.preventDefault()
    
    if (usuarios.find((a)=> a.email === inputEmail.value) && usuarios.find((a)=> a.pass === inputPass.value)) {
        const usuarioLogin = usuarios.filter((a)=> a.email == inputEmail.value)
        subirAlLs("login", true)
        subirAlLs("usuario", inputEmail.value)
        subirAlLs("nombre",usuarioLogin[0].nombre)
        subirAlLs("apellido",usuarioLogin[0].apellido)
        swal({
            text: `Bienvenido ${usuarioLogin[0].nombre} `,
            icon: "success",
        })
        loginContainer.style.display = "none"
        lsLogin.style.display = "flex"
        cabeceraLogin.style.display = "none"
        validarUsuarioLogin(traerDelLs("login"))
        location.reload()
    }
    else{
        swal({
            text: "E-mail o Contraseña incorrectos",
            icon: "error",
        })
    }
    loginForm.reset()
    
}

validarUsuarioLogin(traerDelLs("login"))
