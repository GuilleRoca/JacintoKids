function verAccesorios(array){

    const contenedor = document.querySelector(".destacados__contenedor")
    array.map( (productos) => {
        if( productos.categoria == "Accesorios"){
            const card = document.createElement("li")
            card.className = "container_card"
            let descuentoDetalle = ""
            let precioAntes = ""
            if (productos.precioAntes !== ""){
                precioAntes = `Antes $${productos.precioAntes}`
                descuentoDetalle = `
                <div class="descuento">
                    <p>${parseInt(((productos.precioAntes - productos.precioAhora)/productos.precioAhora)*100)}%<p>
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
                            <div><h6>$${productos.precioAhora}</h6></div>
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
        }
    })
}

verAccesorios(productos)