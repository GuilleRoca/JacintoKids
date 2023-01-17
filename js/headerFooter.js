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
                            <a id="navIndumentaria" class="nav-link" href="./productos.html">INDUMENTRARIA</a>
                        </li>
                        <li class="nav-item">
                            <a id="navAccesorios" class="nav-link" aria-current="page" href="./accesorios.html">ACCESORIOS</a>
                        </li>
                        <li class="nav-item">
                            <a id="navJuguetes" class="nav-link" href="./juguetes.html">JUGUETES</a>
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
                        <li><a href="./accesorios.html">Acesorios</a></li>
                        <li><a href="./juguetes.html">Juguetes</a></li>
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

const paginaActiva = document.querySelector("title")

switch (true){
    case paginaActiva.innerText.includes("Inicio"):
        navInicio.classList.add("btn");    
        navInicio.classList.add("active");    
        navInicio.classList.add("active_menu");
        break;
    case paginaActiva.innerText.includes("Productos"):
        navIndumentaria.classList.add("btn");    
        navIndumentaria.classList.add("active");    
        navIndumentaria.classList.add("active_menu");
        break;
    case paginaActiva.innerText.includes("Accesorios"):
        navAccesorios.classList.add("btn");    
        navAccesorios.classList.add("active");    
        navAccesorios.classList.add("active_menu");
        break;
    case paginaActiva.innerText.includes("Juguetes"):
        navJuguetes.classList.add("btn");    
        navJuguetes.classList.add("active");    
        navJuguetes.classList.add("active_menu");
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
        const emailForm = document.querySelector("#email_form");
        const nombreForm = document.querySelector("#nombre_form");
        const apellidoForm = document.querySelector("#apellido_form");
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
    default:
        break; 
}










