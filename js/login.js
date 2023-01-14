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
    localStorage.removeItem("usuario")
}

const subirAlLs = (clave , valor) =>{
    localStorage.setItem( clave , JSON.stringify(valor))
}

const traerDelLs = (clave) =>{
    return JSON.parse(localStorage.getItem(clave))
}

const validarUsuarioLogin = (clave)=>{
    if(clave == true){
        const nombreEnLs = traerDelLs("nombre")
        lsLogin.style.display = "flex"
        cabeceraLogin.style.display = "none"
        const nombre = document.createElement("p")
        nombre.className = "nombre_usuario_login"
        nombre.innerHTML=`
            ${nombreEnLs} de compras <img src="./img/client.png" alt="cliente" class="alto_1r">
        `
        nombreUsuarioLs.appendChild(nombre)
    }
}

loginForm.onsubmit = (event) =>{
    event.preventDefault()
    
    if (usuarios.find((a)=> a.email === inputEmail.value) && usuarios.find((a)=> a.pass === inputPass.value)) {
        console.log(inputEmail.value)
        console.log(inputPass.value)
        const usuarioLogin = usuarios.filter((a)=> a.email == inputEmail.value)
        subirAlLs("login", true)
        subirAlLs("usuario", inputEmail.value)
        subirAlLs("nombre",usuarioLogin[0].nombre)
        swal({
            text: `Bienvenido ${usuarioLogin[0].nombre} `,
            icon: "success",
        })
        loginContainer.style.display = "none"
        lsLogin.style.display = "flex"
        cabeceraLogin.style.display = "none"
        validarUsuarioLogin(traerDelLs("login"))
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


