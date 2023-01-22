/* Productos destacados */

fetch("https://api.mercadolibre.com/sites/MLA/search?seller_id=138745311&q=grisino")
.then(respuesta=> respuesta.json())
.then(data => {
    const contenedor = document.querySelector(".destacados__contenedor")
    const comprar = []
    data.results.forEach((element) =>{
        let precio = element.original_price
        let precioAntes
        let descuentoDetalle
        if (precio === null){
            precioAntes = ""
            descuentoDetalle = ""
        }else{  
            precioAntes = `Antes $${precio}`
            descuentoDetalle = `
            <div class="descuento">
                <p>${parseInt(((element.original_price - element.price)/element.original_price)*100)}%<p>
                <p>off<p>
            </div>
            `
            const card = document.createElement("li")
            card.className = "container_card"
            card.innerHTML = `
            <div class="card p-3 " style="width: 12rem;">
                <img src="https://http2.mlstatic.com/D_NQ_NP_${element.thumbnail_id}-O.webp" class="card-img-top rounded-4" alt="${element.title}">
                <div class="card-body m-0 p-0">
                <h6 class="card-title pt-1">${element.title} </h6>
                <div class="d-flex justify-content-between">
                <div><h6>$${element.price}</h6></div>
                <div><h6 class="text-decoration-line-through">${precioAntes}</h6></div>
                </div>
                <div class="d-flex justify-content-between">
                <button id="boton-${element.id}" class="boton-carrito btn btn-primary">A carrito
                </button>
                ${descuentoDetalle} 
                </div>
                
                </div>
                </div>
                `
                comprar.push(element)
                contenedor.appendChild(card)
            }
            })
            let carrito = []
            const botonACarrito = document.querySelectorAll(".boton-carrito")
            botonACarrito.forEach ( boton => {
                boton.onclick = () =>{
                    const id = boton.id.slice(6)
                    const filtroProd = comprar.find((element) => {
                        return element.id === id
                    })                   
                    carrito.push (filtroProd)
                    localStorage.setItem("carrito", JSON.stringify(carrito))
                    Toastify({
                        text: "Articulo agregado al carrito correctamente",
                        duration: 3000,
                        newWindow: true,
                        close: true,
                        gravity: "top", // `top` or `bottom`
                        position: "right", // `left`, `center` or `right`
                        stopOnFocus: true, // Prevents dismissing of toast on hover
                        style: {
                            background: "linear-gradient(to right, #00b09b, #96c93d)",
                        },
                        onClick: function(){} // Callback after click
                    }).showToast();
                }
            })
            
            const productosElegidos = JSON.parse(localStorage.getItem("carrito"))
            carrito = productosElegidos || []
            
})
.catch(()=> console.log("algo salió mal"))

/* Alert secciones */
const botonAccesorios = document.querySelector("#boton-seccionAccesorios")
const botonNavidad = document.querySelector("#boton-seccionNavidad")

botonAccesorios.onclick = () =>{
    swal({
        text: "Página fuera de servicio. Estamos cargando los articulos",
        icon: "info",
    })
}
botonNavidad.onclick = () =>{
    swal({
        text: "Página fuera de servicio. Estamos cargando los articulos",
        icon: "info",
    })
}


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
                                        <a id="navProductos" class="nav-link" href="./layout/productos.html">PRODUCTOS</a>
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

insertHeader()
insertFooter()

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
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-buttn-prev',
      },
  });
  
