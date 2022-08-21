let catID = localStorage.getItem("catID");
const URL_PRODUCTS = `https://japceibal.github.io/emercado-api/cats_products/${catID}.json`

fetch(URL_PRODUCTS)
.then((response) => response.json())
.then(list =>{
    let products = document.getElementById("products")
  
    for (product of list.products){
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

