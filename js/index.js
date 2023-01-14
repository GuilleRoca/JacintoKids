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