/* Verificación de filtros */

const subirAlSs = (clave , valor) =>{
    sessionStorage.setItem( clave , JSON.stringify(valor))
}

const traerDelSs = (clave) =>{
    return JSON.parse(sessionStorage.getItem(clave))
}


const ordenPred = document.querySelector("#ordenPredeterminado")
const ordenAsc = document.querySelector("#ordenAscendente")
const ordenDes = document.querySelector("#ordenDescendente")
const ordenOferta = document.querySelector("#verOfertas")

switch(traerDelSs("filtro")){
    case "predeterminado":
        ordenPred.checked = true;
        ordenAsc.checked = false;
        ordenDes.checked = false;
        ordenOferta.checked = false;
        break;
    case "ascendente":
        ordenPred.checked = false;
        ordenAsc.checked = true;
        ordenDes.checked = false;
        ordenOferta.checked = false;
        break;
    case "descendente":
        ordenPred.checked = false;
        ordenAsc.checked = false;
        ordenDes.checked = true;
        ordenOferta.checked = false;
        break;
    case "ofertas":
        ordenPred.checked = true;
        ordenAsc.checked = false;
        ordenDes.checked = false;
        ordenOferta.checked = true;
        break;
    default:
        subirAlSs("filtro","predeterminado")
        break;
    
}
ordenPred.onclick = () =>{
    subirAlSs("filtro","predeterminado")
    location.reload()
}
ordenAsc.onclick = () =>{
    subirAlSs("filtro","ascendente")
    location.reload()
}
ordenDes.onclick = () =>{
    subirAlSs("filtro","descendente")
    location.reload()
}
ordenOferta.onclick = () =>{
    subirAlSs("filtro","ofertas")
    location.reload()
}

/* Conexion a la API de MErcado Libre - Tienda de Grisino - Obtener 250 artículos  */
    

let comprar = []
    fetch(`https://api.mercadolibre.com/sites/MLA/search?seller_id=138745311&q=grisino`)
    .then(respuesta=> respuesta.json())
    .then(data => {
        const contenedor = document.querySelector(".destacados__contenedor")
        switch (traerDelSs("filtro")){
            case "descendente":
                comprar = data.results.sort((a, b) => {
                    if ( a.title < b.title ){
                        return 1
                    } else if ( a.title > b.title){
                        return -1
                    } else {
                        return 0
                    }
                });
                break;
            case "ascendente":
                comprar = data.results.sort((a, b) => {
                    if ( a.title < b.title ){
                        return -1
                    } else if ( a.title > b.title){
                            return 1
                    } else {
                        return 0
                    }
                });
                break;
            case "ofertas":
                comprar = data.results.filter((element)=>element.original_price != null);
                break;
            default:
                comprar = data.results;
                break;
        }  
        comprar.forEach((element) =>{
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
                const card = document.createElement("li")
                card.className = "container_card"
                card.innerHTML = `
                    <div class="card p-3 " style="width: 12rem;">
                        <img src="https://http2.mlstatic.com/D_NQ_NP_${element.thumbnail_id}-O.webp" class="card-img-top rounded-4" alt="${element.title}">
                        <div class="card-body m-0 p-0">
                            <h6 class="card-title pt-1">${element.title} </h6>
                            <div class="d-flex justify-content-between">
                                <div>
                                    <h6>$${element.price}</h6>
                                </div>
                                <div>
                                    <h6 class="text-decoration-line-through">${precioAntes}</h6>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <button id="boton-${element.id}" class="boton-carrito btn btn-primary">A carrito
                                </button>
                                ${descuentoDetalle} 
                            </div>
                        </div>
                    </div>
                    `
                contenedor.appendChild(card)
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


    