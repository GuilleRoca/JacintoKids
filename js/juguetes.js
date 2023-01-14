fetch("https://api.mercadolibre.com/sites/MLA/search?seller_id=137081041")
.then(respuesta=> respuesta.json())
.then(data => {
    console.log(data.results)
    const contenedor = document.querySelector(".destacados__contenedor")
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
        }
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
                        <a href="./layout/reparacion.html" class="btn btn-primary">Comprar</a>
                        ${descuentoDetalle}                        
                    </div>
                    
                </div>
            </div>
        `
        contenedor.appendChild(card)
    })
})
.catch(()=> console.log("algo salió mal"))



