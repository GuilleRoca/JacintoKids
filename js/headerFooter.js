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
            <p class="designer">WEB Designer   <img src="../img/logogr.JPG" alt="Logo GR" class="icono-redes">   Guillermo Rocatti</p>
    `
    containerFooter.appendChild(footerPaginas)
}

insertFooter()







