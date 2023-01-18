/* Productos destacados */

function verDestacados(array){

    const contenedor = document.querySelector(".destacados__contenedor")
    const arrayDestacados = array.slice(0,15)

    arrayDestacados.map( (productos) => {
        const card = document.createElement("li")
        card.className = "container_card"
        card.innerHTML = `
            <div class="card p-3 " style="width: 12rem;">
                <img src="${productos.img} " class="card-img-top rounded-4" alt="${productos.name}">
                <div class="card-body m-0 p-0">
                    <h6 class="card-title pt-1">${productos.name} </h6>
                    <div class="d-flex justify-content-between">
                        <div><h6>$${productos.precioAhora}</h6></div>
                        <div><h6 class="text-decoration-line-through">${productos.precioAntes}</h6></div>
                    </div>
                    <a href="./layout/reparacion.html" class="btn btn-primary">Comprar</a>
                </div>
            </div>
        `
        contenedor.appendChild(card)
    })
}
verDestacados(productos)

/* Header index */
 
function insertHeader (){
    const containerHeader = document.querySelector("#header")
    const headerIndex = document.createElement("div")
    headerIndex.className = "headerPaginas"
    headerIndex.innerHTML=`
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
                        <p class="m-0 p-0 align-middle">Nueva temporada Spring-Summer !! <img src="./img/sol.png" alt="sol" class="alto_1r px-2"><img src="./img/pelota-de-playa.png" alt="pelota" class="alto_1r"></p>
                    </div>
                    <div class="carousel-item">
                        <p class="m-0 p-0 align-middle">3 y 6 cuotas sin interes con todas las tarjetas de crédito!!<img src="./img/promocion.png" alt="promo" class="alto_1r px-2"></p>
                    </div>
                    <div class="carousel-item">
                        <p class="m-0 p-0 align-middle">Hasta 40% de descuento en la temporada otoño-invierno!!<img src="./img/nieve.png" alt="nieve" class="alto_1r px-2"><img src="./img/muneca.png" alt="muñeco de nieve" class="alto_1r"></p>
                    </div>
                </div>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="modo_oscuro">
                <label class="form-check-label" for="flexSwitchCheckDefault">Modo oscuro</label>
            </div>
            <div>
                <a href="./layout/carrito.html"><span class="material-symbols-outlined text-black">shopping_cart</span></a>
            </div>
        </div>
        <div class="redes_mobile">
            <div class="font_3r">
                <ul class="col-12 p-4">
                    <li class="text-center text-black">REDES</li>
                    <li class="p-0"><a href="https://www.instagram.com/"><img src="./img/instagram.svg" alt="instagram" class="alto_4r"></a></li>
                    <li class="p-0"><a href="https://web.whatsapp.com/"><img src="./img/whatsapp.svg" alt="whatsapp" class="alto_4r"></a></li>
                    <li class="p-0"><a href="https://youtube.com.ar"><img src="./img/youtube.svg" alt="yootube" class="alto_4r"></a></li>
                    <li class="p-0"><a href="https://twitter.com/"><img src="./img/twitter.svg" alt="twitter" class="alto_4r"></a></li>
                </ul>       
            </div>
        </div>
        <div class="header_container">
            <div class="header_waves">
                <div class="header__menu">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                            <div class="header_mobile">
                                <ul class="header_mobile_flex">
                                    <li><a href="./layout/reparacion.html"><span class="material-symbols-outlined font_5r text-black">login</span></a></li>
                                    <li><a href="./layout/reparacion.html"><span class="material-symbols-outlined font_5r text-black">person_add</span></a></li>
                                </ul>
                            </div>
                            <a class="navbar-brand mx-5" href="./index.html"><img src="./img/jacitook.png" alt="logotipo de la página" id="logo__jacinto" class="px-0"></a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style="height:5rem; width:5rem"><span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <a id="navInicio" class="nav-link btn active active_menu" aria-current="page" href="./index.html">INICIO</a>
                                    </li>
                                    <li class="nav-item">
                                        <a id="navIndumentaria" class="nav-link" href="./layout/productos.html">INDUMENTARIA</a>
                                    </li>
                                    <li class="nav-item">
                                        <a id="navAccesorios" class="nav-link" href="./layout/accesorios.html">ACCESORIOS</a>
                                    </li>
                                    <li class="nav-item">
                                        <a id="navJuguetes" class="nav-link" href="./layout/juguetes.html">JUGUETES</a>
                                    </li>
                                    <li class="nav-item">
                                        <a id="navPagos" class="nav-link" href="./layout/mpagos.html">PAGOS</a>
                                    </li>
                                    <li class="nav-item">
                                        <a id="navUbicacion" class="nav-link" href="./layout/ubicacion.html">UBICACIÓN</a>
                                    </li>
                                    <li class="nav-item">
                                        <a id="navContacto" class="nav-link" href="./layout/contacto.html">CONTACTO</a>
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
                <main class="main">
                    <h1 class="font_5r text-white">Jacinto kids</h1>
                    <h2 class="font_3r text-white">Ropa para los más peques y coquetos</h2>
                </main>
            </div>
        </div>
    `
    containerHeader.appendChild(headerIndex)
}

/* Footer index */

function insertFooter (){
    const containerFooter = document.querySelector(".footerPage")
    const footerPaginas = document.createElement("div")
    footerPaginas.className = "footer"
    footerPaginas.innerHTML=`
            <div class="izquierdo">
                <h3>INFO</h3>
                <nav class="info_izquierdo">
                    <ul class="pie"> 
                        <li><a href="./layout/termycond.html">Terminos y condiciones</a></li>
                        <li><a href="./layout/cambios.html">Politicas de cambios</a></li>
                        <li><a href="./layout/arrepentimiento.html">Boton de arrepentimiento</a></li>
                    </ul>
                </nav>
            </div>
            <div class="centro">
                <h3>MENU</h3>
                <nav>
                    <ul class="pie">
                        <li><a href="./index.html">Inicio</a></li>
                        <li><a href="./layout/productos.html">Productos</a></li>
                        <li><a href="./layout/accesorios.html">Acesorios</a></li>
                        <li><a href="./layout/juguetes.html">Juguetes</a></li>
                        <li><a href="./layout/mpagos.html">Medios de pago</a></li>
                        <li><a href="./layout/ubicacion.html">Ubicación</a></li>
                        <li><a href="./layout/contacto.html">Contacto</a></li>
                    </ul>
                </nav>
            </div>
            <div class="derecho">
                <h3>REDES</h3>
                <nav>
                    <ul class="pie">
                        <li><a href="https://www.instagram.com/"><img src="./img/instagram.svg" alt="instagram" class="icono-redes"> Instagram</a></li>
                        <li><a href="https://web.whatsapp.com/"><img src="./img/whatsapp.svg" alt="whatsapp" class="icono-redes"> Whatsapp</a></li>
                        <li><a href="https://youtube.com.ar"><img src="./img/youtube.svg" alt="yootube" class="icono-redes">YouTube</a></li>
                        <li><a href="https://twitter.com/"><img src="./img/twitter.svg" alt="twitter" class="icono-redes"> Twitter</a></li>
                    </ul>
                </nav>
        </div>

        <a class="contactoWa" href="https://web.whatsapp.com/">
            <div>
                <img src="./img/whatsapp.png" alt="wa">
            </div>
        </a>
        <div>
        <p class="designer">WEB Designer   <img src="../img/logogr.JPG" alt="Logo GR" class="icono-redes">   Guillermo Rocatti      <a href="https://github.com/GuilleRoca"><img src="./img/github.png" alt="github" class="icono-redes"></a> <a href="https://www.linkedin.com/in/guillermo-angel-rocatti/"><img src="./img/linkedin.png" alt="linkedin" class="icono-redes"></a></p>
        </div>
    `
    containerFooter.appendChild(footerPaginas)
}

insertFooter()
insertHeader()

/* modo oscuro index */

const subirAlLsIn = (clave , valor) =>{
    localStorage.setItem( clave , JSON.stringify(valor))
}

const traerDelLsIn = (clave) =>{
    return JSON.parse(localStorage.getItem(clave))
}

const bmo = document.querySelector("#modo_oscuro")
const fondoOscuro = document.querySelector(".destacados")
const bodyOscuro = document.querySelector("body")
const waveOscuro = document.querySelector(".header_waves")
const letrasOscuro = document.querySelector(".row")
const footerPrincipalOscuro = document.querySelector("footer")
const footerOscuro = document.querySelector(".footer")
const headerOscuro = document.querySelector(".header__principal")
const grisinoOscuro = document.querySelector(".grisino")


if (traerDelLsIn("modoOscuro") == null){
    subirAlLsIn("modoOscuro", false )
}else if(traerDelLsIn("modoOscuro") == false){
    bmo.checked = false
}else {
    bmo.checked = true
    fondoOscuro.style.background = `url("./img/fondoOscuro.jpg")`  
    fondoOscuro.style.backgroundSize = "contain"
    bodyOscuro.style.backgroundColor = "rgb(9,9,9)"
    waveOscuro.style.background = `url("./img/wave-black.svg")`
    letrasOscuro.style.color = "white"
    footerOscuro.style.backgroundColor = "rgb(137,109,109)"
    headerOscuro.style.backgroundColor = "rgb(137,109,109)"
    footerPrincipalOscuro.style.backgroundColor = "rgb(137,109,109)"
    footerOscuro.style.color = "white"
    grisinoOscuro.style.color = "white"
}
bmo.onclick = () =>{
    if (traerDelLsIn("modoOscuro") == false){
        subirAlLsIn("modoOscuro", true )
        fondoOscuro.style.background = `url("./img/fondoOscuro.jpg")`
        fondoOscuro.style.backgroundSize = "contain"
        bodyOscuro.style.backgroundColor = "rgb(9,9,9)"
        waveOscuro.style.background = `url("./img/wave-black.svg")`
        letrasOscuro.style.color = "white"
        footerOscuro.style.backgroundColor = "rgb(137,109,109)"
        headerOscuro.style.backgroundColor = "rgb(137,109,109)"
        footerPrincipalOscuro.style.backgroundColor = "rgb(137,109,109)"
        footerOscuro.style.color = "white"
        grisinoOscuro.style.color = "white"
    }else{
        subirAlLsIn("modoOscuro", false )
        fondoOscuro.style.background = `url("./img/fondo-lunares.jpg")`
        fondoOscuro.style.backgroundSize = "contain"
        bodyOscuro.style.backgroundColor = "white"
        waveOscuro.style.background = `url("./img/wave-1.svg")`
        letrasOscuro.style.color = "black"
        footerOscuro.style.backgroundColor = "beige"
        footerPrincipalOscuro.style.backgroundColor = "beige"
        footerOscuro.style.color = "black"
        headerOscuro.style.backgroundColor = "beige"
        grisinoOscuro.style.color = "black"
    }
}


