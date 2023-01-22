/* Mostrar productos del carrito */

let carritoDelLs = JSON.parse(localStorage.getItem("carrito"))

function verCarrito(array){
    const carritoNodos = document.querySelector(".destacados__contenedor")

    array.map( (element) => {
        const card = document.createElement("li")
        card.className = "container_card"
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
            }
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
                    <button id="boton-${element.id}" class="boton-eliminar btn btn-primary">Eliminar
                    </button>
                    ${descuentoDetalle} 
                    </div>
                    
                    </div>
                    </div>
                    `
                carritoNodos.appendChild(card)
        
    })
}

verCarrito(carritoDelLs || [])

/* Eliminar productos del carrito de a uno */

function sacarDelCarrito (array) {
    const botonSacar = document.querySelectorAll(".boton-eliminar")    
    botonSacar.forEach( boton => {
        boton.onclick = () => {
            const id = boton.id.slice(6)            
            const filtrarProducto = array.filter((elemento) => {

                return elemento.id != id
            })
            carritoDelLs = filtrarProducto
            localStorage.setItem("carrito", JSON.stringify(carritoDelLs))
            verCarrito(carritoDelLs)
            sacarDelCarrito(carritoDelLs)
            location.reload()  
        }
        
    })
}

sacarDelCarrito(carritoDelLs)

/* Borrar todos los productos del carrito */

const botonBorrarCarrito = document.querySelector("#borrar-productos")

botonBorrarCarrito.onclick = () => {
    localStorage.removeItem("carrito")
    location.reload()
}


let totalCarrito = 0
if (carritoDelLs === null){
}else if (carritoDelLs.length> 0){
    for( let i=0; i < carritoDelLs.length ; i++){
        totalCarrito = totalCarrito + parseInt(carritoDelLs[i].price)
    }
}

/* Cálculo del precio final */

function finalTotal (array) {
    const detallePrecio = document.querySelector(".card_total")
    const totalPrecio = document.createElement("div")
    totalPrecio.className = "container_card"
    totalPrecio.innerHTML=`
    <p>Subtotal - $${totalCarrito}</p>
    <p>Envío - $800</p>
    <p>Total  - $${totalCarrito+800}</p>
    `
    detallePrecio.appendChild(totalPrecio) 
}   

finalTotal()

/* Validar datos */

const formularioDePago = document.querySelector("#form_pago")
const botonFinalizarCompra = document.querySelector(".finalizar_compra")
const nombreCarrito = document.querySelector("#nombre_form")
const apellidoCarrito = document.querySelector("#apellido_form")
const emailCarrito = document.querySelector("#email_form")
const provinciaCarrito = document.querySelector("#provincia_form")
const ciudadCarrito = document.querySelector("#ciudad_form")
const calleCarrito = document.querySelector("#calle_form")
const numeroCalleCarrito = document.querySelector("#calleNumero_form")
const cpCarrito = document.querySelector("#cp_form")
const tarjetaCarrito = document.querySelector("#tarjeta_form")
const csCarrito = document.querySelector("#codigoSeg_form")

formularioDePago.onsubmit = (e) =>{
    e.preventDefault()
    const mensaje = `Alguno de los datos ingresado son incorrectos \n Recuerde que los nombre y apellidos \ndeben tener al menos 3 letras. \nEl email debe tener si o si un "@" \nLas provincias, ciudades y calles deben existir \ny las tarjetas tienen 16 digitos y un codigo de seguridad de 3 números`

   if (nombreCarrito.value.length < 3 || apellidoCarrito.value.length < 3 || provinciaCarrito.value.length < 3 || ciudadCarrito.value.length < 3 || calleCarrito.length < 3|| cpCarrito.length < 4 || tarjetaCarrito.value.length != 16 || csCarrito.value.length != 3 || emailCarrito.value.includes("@") == false || numeroCalleCarrito.value.length == 0){
        swal({
            text: `${mensaje} `,
            icon: "error",
        });
        nombreCarrito.value.length < 3 ? nombreCarrito.style.border = "2px solid red" : nombreCarrito.style.border = "2px solid green"
        apellidoCarrito.value.length < 3 ? apellidoCarrito.style.border = "2px solid red" : apellidoCarrito.style.border = "2px solid green"
        provinciaCarrito.value.length < 3 ? provinciaCarrito.style.border = "2px solid red" : provinciaCarrito.style.border = "2px solid green"
        ciudadCarrito.value.length < 3 ? ciudadCarrito.style.border = "2px solid red" : ciudadCarrito.style.border = "2px solid green"
        calleCarrito.value.length < 3 ? calleCarrito.style.border = "2px solid red" : calleCarrito.style.border = "2px solid green"
        cpCarrito.value.length < 4 ? cpCarrito.style.border = "2px solid red" : cpCarrito.style.border = "2px solid green"
        tarjetaCarrito.value.length != 16 ? tarjetaCarrito.style.border = "2px solid red" : tarjetaCarrito.style.border = "2px solid green"
        csCarrito.value.length != 3 ? csCarrito.style.border = "2px solid red" : csCarrito.style.border = "2px solid green"
        numeroCalleCarrito.value.length == 0 ? numeroCalleCarrito.style.border = "2px solid red" : csCarrito.numeroCalleCarrito.border = "2px solid green"
        emailCarrito.value.includes("@") == false ? emailCarrito.style.border = "2px solid red" : emailCarrito.style.border = "2px solid green"
        
    }else {
        swal({
            text: `Su compra fue procesada correctamente. \nEn breve le llegará su comprobante. `,
            icon: "success",
        });
        setTimeout (()=>{
            localStorage.removeItem("carrito")
            location.reload()
        },3000)

    }


}

