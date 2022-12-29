const botonLogin = document.querySelector(".login_action")
const botonCrear = document.querySelector(".create_action")
const salirLogin = document.querySelector(".cancel_login")
const salirCreate = document.querySelector(".cancel_create")
const loginContainer = document.querySelector(".login")
const createContainer = document.querySelector(".create")

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
