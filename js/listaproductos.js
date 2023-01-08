function verProductos(array){

    const contenedor = document.querySelector(".destacados__contenedor")

    array.map( (productos) => {
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


function filtros (array){
    const nuevoArr = new Set (array.map((a)=>a.categoria))
    const filtrosProductos = [...nuevoArr]
    const contenedorFiltros = document.querySelector(".filtros")


    filtrosProductos.map((categorias) => {
        const botonesFiltros = document.createElement("div")
        botonesFiltros.className = "d-flex justify-content-between"
        botonesFiltros.innerHTML = `
        <input type="button" id="filtro_${categorias} " class="categoriaFiltro btn btn-info" value="${categorias}">
        `
        contenedorFiltros.appendChild(botonesFiltros)
    })
}


verProductos(productos)






