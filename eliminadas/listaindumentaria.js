function verProductos(array){

    const contenedor = document.querySelector(".destacados__contenedor")

    array.map( (productos) => {
        if( productos.categoria !== "Accesorios"){
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
                            <button id="boton-${productos.id}" class="boton-carrito btn btn-primary">A carrito
                            </button>
                            ${descuentoDetalle} 
                        </div>
                    </div>
                </div>
            `
            contenedor.appendChild(card)
        }
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
        <input type="button" id="filtro_${categorias}" class="categoriaFiltro btn btn-info" value="${categorias}">
        `
        contenedorFiltros.appendChild(botonesFiltros)
    })
}


verProductos(productos)
filtros(productos)

/* document.getElementsByClassName("categoriaFiltro")
    .addEventListener("click", function(event) {
        alert("Submit button is clicked!");
        event.preventDefault();
    });

const containerFiltros = document.querySelector(".filtros")
containerFiltros.onclick = () =>{
    console.log("click")
    const catFiltro = document.getElementsByClassName ("categoriaFiltro")
    console.log(catFiltro)
}
 */
let carrito = []

const agregarACarrito = (prod) => {
    const botonACarrito = document.querySelectorAll(".boton-carrito")
    botonACarrito.forEach ( boton => {
        boton.onclick = () =>{
            const id = boton.id.slice(6)    
            const filtroProd = prod.find((element) => {
                return element.id === Number(id)
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
}

agregarACarrito(productos)

const productosElegidos = JSON.parse(localStorage.getItem("carrito"))
carrito = productosElegidos || []









