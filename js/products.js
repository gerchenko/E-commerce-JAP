const listadoAutos = "https://japceibal.github.io/emercado-api/cats_products/101.json"

fetch(listadoAutos)
.then((response) => response.json())
.then(autos =>{
    let products = document.getElementById("products")

    for (product of autos.products){
        products.innerHTML +=
        `
            <div class="container">
            
                <div class="list-group-item list-group-item-action cursor-active">
                    <div class="row">
                        <div class="col-3">
                            <img src="${product.image}" class="img-thumbnail">
                        </div>
                            <div class="col">
                                <div class="d-flex w-100 justify-content-between">
                                    <h4 class="mb-1">${product.name} - ${product.currency} ${product.cost}</h4>
                                    <small>${product.soldCount} vendidos</small>
                                </div>
                                <p class="mb-1">${product.description}</p>
                            </div>
                    </div>
                </div>
            </div>`
    }
    
})