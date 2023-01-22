/* Insertar el mismo header  en todas las páginas*/

function insertHeader (){
    const containerHeader = document.querySelector("#header")
    const headerPaginas = document.createElement("div")
    headerPaginas.className = "headerPaginas"
    headerPaginas.innerHTML=`
    <div class="header__principal">
    <div class="header__principal__cuenta">
        <a href="#" class="login_action text-decoration-none text-black">Iniciar sesión</a>
        <a href="#" class="create_action text-decoration-none text-black">Crear cuenta</a>
    </div>
    <div class="headre_principal_login">
        <a href="#" class="nombre_usuario text-decoration-none text-black"></a>
        <a href="#" class="close_action text-decoration-none text-black">Cerrar sesión</a>
    </div>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <p class="m-0 p-0 align-middle">Nueva temporada Spring-Summer !! <img src="../img/sol.png" alt="sol" class="alto_1r px-2"><img src="../img/pelota-de-playa.png" alt="pelota" class="alto_1r"></p>
            </div>
            <div class="carousel-item">
                <p class="m-0 p-0 align-middle">3 y 6 cuotas sin interes con todas las tarjetas de crédito!!<img src="../img/promocion.png" alt="promo" class="alto_1r px-2"></p>
            </div>
            <div class="carousel-item">
                <p class="m-0 p-0 align-middle">Hasta 40% de descuento en la temporada otoño-invierno!!<img src="../img/nieve.png" alt="nieve" class="alto_1r px-2"><img src="../img/muneca.png" alt="muñeco de nieve" class="alto_1r"></p>
            </div>
        </div>
    </div>
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="modo_oscuro">
        <label class="form-check-label" for="flexSwitchCheckDefault">Modo oscuro</label>
    </div>
    <div>
        <a href="./carrito.html"><span class="material-symbols-outlined text-black">shopping_cart</span></a>
    </div>
</div>
<div class="redes_mobile">
    <div class="font_3r">
        <ul class="col-12 p-4">
            <li class="text-center text-black">REDES</li>
            <li class="p-0"><a href="https://www.instagram.com/"><img src="../img/instagram.svg" alt="instagram" class="alto_4r"></a></li>
            <li class="p-0"><a href="https://web.whatsapp.com/"><img src="../img/whatsapp.svg" alt="whatsapp" class="alto_4r"></a></li>
            <li class="p-0"><a href="https://youtube.com.ar"><img src="../img/youtube.svg" alt="yootube" class="alto_4r"></a></li>
            <li class="p-0"><a href="https://twitter.com/"><img src="../img/twitter.svg" alt="twitter" class="alto_4r"></a></li>
        </ul>       
    </div>
</div>
<div class="header_container_second">
    <div class="header__menu">
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
                <div class="header_mobile">
                    <ul class="header_mobile_flex">
                        <li><a href="./reparacion.html"><span class="material-symbols-outlined font_5r text-black">login</span></a></li>
                        <li><a href="./reparacion.html"><span class="material-symbols-outlined font_5r text-black">person_add</span></a></li>
                    </ul>
                </div>
                <a class="navbar-brand mx-5" href="../index.html"><img src="../img/jacitook.png" alt="logotipo de la página" id="logo__jacinto" class="px-0"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="height:5rem; width:5rem"><span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a id="navInicio" class="nav-link" href="../index.html">INICIO</a>
                        </li>
                        <li class="nav-item">
                            <a id="navProductos" class="nav-link" href="./productos.html">PRODUCTOS</a>
                        </li>
                        <li class="nav-item">
                            <a id="navPagos" class="nav-link" href="./mpagos.html">PAGOS</a>
                        </li>
                        <li class="nav-item">
                            <a id="navUbicacion" class="nav-link" href="./ubicacion.html">UBICACIÓN</a>
                        </li>
                        <li class="nav-item">
                            <a id="navContacto" class="nav-link" href="./contacto.html">CONTACTO</a>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search">
                        <button class="btn btn-outline-info text-primary" type="submit">Buscar</button>
                    </form>
                </div>
            </div>
        </nav>
    </div>
</div>
    `
    containerHeader.appendChild(headerPaginas)
}
/* Insertar el mismo footer en todas las páginas */
 
function insertFooter (){
    const containerFooter = document.querySelector(".footerPage")
    const footerPaginas = document.createElement("div")
    footerPaginas.className = "footer"
    footerPaginas.innerHTML=`
            <div class="izquierdo">
                <h3>INFO</h3>
                <nav class="info_izquierdo">
                    <ul class="pie"> 
                        <li><a href="./termycond.html">Terminos y condiciones</a></li>
                        <li><a href="./cambios.html">Politicas de cambios</a></li>
                        <li><a href="./arrepentimiento.html">Boton de arrepentimiento</a></li>
                    </ul>
                </nav>
            </div>
            <div class="centro">
                <h3>MENU</h3>
                <nav>
                    <ul class="pie">
                        <li><a href="../index.html">Inicio</a></li>
                        <li><a href="./productos.html">Productos</a></li>
                        <li><a href="./mpagos.html">Medios de pago</a></li>
                        <li><a href="./ubicacion.html">Ubicación</a></li>
                        <li><a href="./contacto.html">Contacto</a></li>
                    </ul>
                </nav>
            </div>
            <div class="derecho">
                <h3>REDES</h3>
                <nav>
                    <ul class="pie">
                        <li><a href="https://www.instagram.com/"><img src="../img/instagram.svg" alt="instagram" class="icono-redes"> Instagram</a></li>
                        <li><a href="https://web.whatsapp.com/"><img src="../img/whatsapp.svg" alt="whatsapp" class="icono-redes"> Whatsapp</a></li>
                        <li><a href="https://youtube.com.ar"><img src="../img/youtube.svg" alt="yootube" class="icono-redes">YouTube</a></li>
                        <li><a href="https://twitter.com/"><img src="../img/twitter.svg" alt="twitter" class="icono-redes"> Twitter</a></li>
                    </ul>
                </nav>
            </div>
        </div>
        
        <a class="contactoWa" href="https://web.whatsapp.com/">
            <div>
                <img src="../img/whatsapp.png" alt="wa">
            </div>
        </a>
        <div>
            <p class="designer">WEB Designer   <img src="../img/logogr.JPG" alt="Logo GR" class="icono-redes">   Guillermo Rocatti      <a href="https://github.com/GuilleRoca"><img src="../img/github.png" alt="github" class="icono-redes"></a> <a href="https://www.linkedin.com/in/guillermo-angel-rocatti/"><img src="../img/linkedin.png" alt="linkedin" class="icono-redes"></a></p>
        </div>
    `
    containerFooter.appendChild(footerPaginas)
}

insertHeader()
insertFooter()

/* modo oscuro y nav */

const paginaActiva = document.querySelector("title")

const subirAlLsHF = (clave , valor) =>{
    localStorage.setItem( clave , JSON.stringify(valor))
}

const traerDelLsHF = (clave) =>{
    return JSON.parse(localStorage.getItem(clave))
}

const bmo = document.querySelector("#modo_oscuro")
const bodyOscuro = document.querySelector("body")
const footerPrincipalOscuro = document.querySelector("footer")
const footerOscuro = document.querySelector(".footer")
const headerOscuro = document.querySelector(".header__principal")

if (traerDelLsHF("modoOscuro") == null){
    subirAlLsHF("modoOscuro", false )
}else if(traerDelLsHF("modoOscuro") == false){
    bmo.checked = false
}else {
    if (paginaActiva.innerText.includes("Productos")){
        const fondoOscuro = document.querySelector(".destacados")
        const seccionesOscuro = document.querySelector(".filtros")
        seccionesOscuro.style.color = "white"
        fondoOscuro.style.background = `url("../img/fondoOscuro.jpg")`  
        fondoOscuro.style.backgroundSize = "contain"
    }else if(paginaActiva.innerText.includes("Pagos")){
        const pagosOscuro = document.querySelector(".mpagos")
        pagosOscuro.style.backgroundColor = "rgb(9,9,9)"
        bodyOscuro.style.color = "white"
    }else if(paginaActiva.innerText.includes("Ubicacion")){
        bodyOscuro.style.color = "white"
    }else if(paginaActiva.innerText.includes("Contacto")){
        const contactoOscuro = document.querySelector(".main_contacto_form")
        const tituloContactoOscuro = document.querySelector(".titulo_contacto")
        contactoOscuro.style.color = "white"
        tituloContactoOscuro.style.color = "white"
    }else if(paginaActiva.innerText.includes("Condiciones") || paginaActiva.innerText.includes("Cambios") || paginaActiva.innerText.includes("Arrepentimiento") || paginaActiva.innerText.includes("Carrito")){
        bodyOscuro.style.color = "white"
    }
    bmo.checked = true
    bodyOscuro.style.backgroundColor = "rgb(9,9,9)"
    footerOscuro.style.backgroundColor = "rgb(137,109,109)"
    headerOscuro.style.backgroundColor = "rgb(137,109,109)"
    footerPrincipalOscuro.style.backgroundColor = "rgb(137,109,109)"
    footerOscuro.style.color = "white"
}
bmo.onclick = () =>{
    if (traerDelLsHF("modoOscuro") == false){
        if (paginaActiva.innerText.includes("Productos")){
            const fondoOscuro = document.querySelector(".destacados")
            fondoOscuro.style.background = `url("../img/fondoOscuro.jpg")`
            fondoOscuro.style.backgroundSize = "contain"
            const seccionesOscuro = document.querySelector(".filtros")
            seccionesOscuro.style.color = "white"
        }else if(paginaActiva.innerText.includes("Pagos")){
            const pagosOscuro = document.querySelector(".mpagos")
            pagosOscuro.style.backgroundColor = "rgb(9,9,9)"
            bodyOscuro.style.Color = "white"
        }else if(paginaActiva.innerText.includes("Ubicacion")){
            bodyOscuro.style.color = "white"
        }else if(paginaActiva.innerText.includes("Contacto")){
            const contactoOscuro = document.querySelector(".main_contacto_form")
            const tituloContactoOscuro = document.querySelector(".titulo_contacto")
            tituloContactoOscuro.style.color = "white"
            contactoOscuro.style.color = "white"
        }else if(paginaActiva.innerText.includes("Condiciones") || paginaActiva.innerText.includes("Cambios") || paginaActiva.innerText.includes("Arrepentimiento") || paginaActiva.innerText.includes("Carrito")){
            bodyOscuro.style.color = "white"
        }
        subirAlLsHF("modoOscuro", true )
        bodyOscuro.style.backgroundColor = "rgb(9,9,9)"
        footerOscuro.style.backgroundColor = "rgb(137,109,109)"
        headerOscuro.style.backgroundColor = "rgb(137,109,109)"
        footerPrincipalOscuro.style.backgroundColor = "rgb(137,109,109)"
        footerOscuro.style.color = "white"
    }else{
        if (paginaActiva.innerText.includes("Productos")){
            const fondoOscuro = document.querySelector(".destacados")
            fondoOscuro.style.background = `url("../img/fondo-lunares.jpg")`
            fondoOscuro.style.backgroundSize = "contain"
            const seccionesOscuro = document.querySelector(".filtros")
            seccionesOscuro.style.color = "black"
        }else if(paginaActiva.innerText.includes("Pagos")){
            const pagosOscuro = document.querySelector(".mpagos")
            pagosOscuro.style.backgroundColor = "white"
            bodyOscuro.style.Color = "rgb(9,9,9)"
        }else if(paginaActiva.innerText.includes("Ubicacion")){
            bodyOscuro.style.color = "rgb(9,9,9)"
        }else if(paginaActiva.innerText.includes("Contacto")){
            const contactoOscuro = document.querySelector(".main_contacto_form")
            const tituloContactoOscuro = document.querySelector(".titulo_contacto")
            contactoOscuro.style.color = "rgb(9,9,9)"
            tituloContactoOscuro.style.color = "rgb(9,9,9)"
        }else if(paginaActiva.innerText.includes("Condiciones") || paginaActiva.innerText.includes("Cambios") || paginaActiva.innerText.includes("Arrepentimiento") || paginaActiva.innerText.includes("Carrito")){
            bodyOscuro.style.color = "rgb(9,9,9)"
        }
        subirAlLsHF("modoOscuro", false )
        bodyOscuro.style.backgroundColor = "white"
        footerOscuro.style.backgroundColor = "beige"
        footerPrincipalOscuro.style.backgroundColor = "beige"
        footerOscuro.style.color = "black"
        headerOscuro.style.backgroundColor = "beige"
    }
}

/* destacar pagina activa */

switch (true){
    case paginaActiva.innerText.includes("Inicio"):
        navInicio.classList.add("btn");    
        navInicio.classList.add("active");    
        navInicio.classList.add("active_menu");
        break;
    case paginaActiva.innerText.includes("Productos"):
        navProductos.classList.add("btn");    
        navProductos.classList.add("active");    
        navProductos.classList.add("active_menu");
        break;
    case paginaActiva.innerText.includes("Pagos"):
        navPagos.classList.add("btn");    
        navPagos.classList.add("active");    
        navPagos.classList.add("active_menu");
        break;
    case paginaActiva.innerText.includes("Ubicacion"):
        navUbicacion.classList.add("btn");    
        navUbicacion.classList.add("active");    
        navUbicacion.classList.add("active_menu");
        break;
    case paginaActiva.innerText.includes("Contacto"):
        navContacto.classList.add("btn");    
        navContacto.classList.add("active");    
        navContacto.classList.add("active_menu");
        const emailForm = document.querySelector("#email_contacto");
        const nombreForm = document.querySelector("#nombre_contacto");
        const apellidoForm = document.querySelector("#apellido_contacto");
        if (JSON.parse(localStorage.getItem("login"))){
            emailForm.value=JSON.parse(localStorage.getItem("usuario"))
            nombreForm.value=JSON.parse(localStorage.getItem("nombre"))
            apellidoForm.value=JSON.parse(localStorage.getItem("apellido"))
        };
        break;
    case paginaActiva.innerText.includes("Arrepentimiento"):
        const emailFormArrep = document.querySelector("#email_form");
        const nombreFormArrep = document.querySelector("#nombre_form");
        const apellidoFormArrep = document.querySelector("#apellido_form");
        if (JSON.parse(localStorage.getItem("login"))){
            emailFormArrep.value=JSON.parse(localStorage.getItem("usuario"))
            nombreFormArrep.value=JSON.parse(localStorage.getItem("nombre"))
            apellidoFormArrep.value=JSON.parse(localStorage.getItem("apellido"))
        };
        break;
    case paginaActiva.innerText.includes("Carrito"):
        const emailFormCarrito = document.querySelector("#email_form");
        const nombreFormCarrito = document.querySelector("#nombre_form");
        const apellidoFormCarrito = document.querySelector("#apellido_form");
        if (JSON.parse(localStorage.getItem("login"))){
            emailFormCarrito.value=JSON.parse(localStorage.getItem("usuario"))
            nombreFormCarrito.value=JSON.parse(localStorage.getItem("nombre"))
            apellidoFormCarrito.value=JSON.parse(localStorage.getItem("apellido"))
        };
        break;
    default:
        break; 
}

/* validación de formulario de contacto */
const formContacto = document.querySelector("#formulario_contacto")
const nombreContacto = document.querySelector("#nombre_contacto")
const apellidoContacto = document.querySelector("#apellido_contacto")
const emailContacto = document.querySelector("#email_contacto")
const consutalContacto = document.querySelector("#consulta_contacto")

formContacto.onsubmit = (e) =>{
    e.preventDefault()
    const mensaje = `Alguno de los datos ingresado son incorrectos \n Recuerde que los nombre y apellidos \ndeben tener al menos 3 letras. \nEl email debe tener si o si un "@" \n y la consulta de contener algún texto`
    if(nombreContacto.value.length < 3 || apellidoContacto.value.length < 3 || emailContacto.value.includes("@") == false || consutalContacto.value.length < 10){
        swal({
            text: `${mensaje} `,
            icon: "error",
        });
        nombreContacto.value.length < 3 ? nombreContacto.style.border = "2px solid red" : nombreContacto.style.border = "2px solid green"
        apellidoContacto.value.length < 3 ? apellidoContacto.style.border = "2px solid red" : apellidoContacto.style.border = "2px solid green"
        consutalContacto.value.length < 10 ? consutalContacto.style.border = "2px solid red" : consutalContacto.style.border = "2px solid green"
        emailContacto.value.includes("@") == false ? emailContacto.style.border = "2px solid red" : emailContacto.style.border = "2px solid green"
    }else {
        swal({
            text: `El mensaje fue enviado con éxito. \nEn breve responderemos a su consulta. `,
            icon: "success",
        });
        setTimeout (()=>{
            location.reload()
        },3000)
        }
}









