let carritoDelLs = JSON.parse(localStorage.getItem("carrito"))

function verCarrito(array){
    const carritoNodos = document.querySelector(".destacados__contenedor")

    array.map( (productos) => {
        const card = document.createElement("li")
        card.className = "container_card"
        let descuentoDetalle = ""
        let precioAntes = ""
        if (productos.precioAntes !== ""){
            precioAntes = `Antes $${productos.precioAntes}`
            descuentoDetalle = `
            <div class="descuento">
                <p>${parseInt(((productos.precioAntes - productos.precioAhora)/productos.precioAntes)*100)}%<p>
                <p>off<p>
            </div>
            `
        }
        card.innerHTML = `
            <div class="card p-3 " style="width: 12rem;">
                <img src="${productos.img} " class="card-img-top rounded-4" alt="${productos.name}">
                <div class="card-body m-0 p-0">
                    <h6 class="card-title pt-1">${productos.name} </h6>
                    <div class="d-flex justify-content-between">
                        <div>
                            <h6>$${productos.precioAhora}</h6>
                        </div>
                        <div>
                            <h6 class="text-decoration-line-through">${precioAntes}</h6>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between">
                        <button id="boton-${productos.id}" class="boton-eliminar btn btn-primary">Eliminar</button>
                    ${descuentoDetalle} 
                    </div>
                </div>
            </div>
        `
        carritoNodos.appendChild(card)
        
    })
}

verCarrito(carritoDelLs || [])



function sacarDelCarrito (array) {
    const botonSacar = document.querySelectorAll(".boton-eliminar")    
    botonSacar.forEach( boton => {
        boton.onclick = () => {
            const id = boton.id.slice(6)            
            const filtrarProducto = array.filter((elemento, i) => {
                return elemento.id != Number(id)
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

const botonBorrarCarrito = document.querySelector("#borrar-productos")

botonBorrarCarrito.onclick = () => {
    localStorage.removeItem("carrito")
    document.querySelector(".carrito-contenedor").innerHTML = "no hay productos"
    location.reload()
}

let totalCarrito = 0
if (carritoDelLs === null){
}else if (carritoDelLs.length> 0){
    for( let i=0; i < carritoDelLs.length ; i++){
        totalCarrito = totalCarrito + parseInt(carritoDelLs[i].precioAhora)
    }
}

function finalTotal (array) {
    const detallePrecio = document.querySelector(".card_total")
    const totalPrecio = document.createElement("div")
    totalPrecio.className = "container_card"
    totalPrecio.innerHTML=`
    <p>Subtotal - ${totalCarrito}</p>
    <p>Envío - $800</p>
    <p>Total  - $${totalCarrito+800}</p>
    `
    detallePrecio.appendChild(totalPrecio) 
}

finalTotal(carritoDelLs || [])

