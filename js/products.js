let catID = localStorage.getItem("catID");
let URL_PRODUCTS = `https://japceibal.github.io/emercado-api/cats_products/${catID}.json`
let btn_ascendente_precio = document.getElementById("ascendente")
let btn_descendente_precio = document.getElementById("descendente")
let btn_cantidad_vendido = document.getElementById("btncantidad")
let cantidad_minima = document.getElementById("cantidad_minima")
let cantidad_maxima = document.getElementById("cantidad_maxima")
let boton_filtrar = document.getElementById("filtrar")
let limpiar = document.getElementById("limpiar")
let buscar = document.getElementById("buscar")
let productos_filtrados = [];
let productsArray = [];
let products = document.getElementById("products")

function mostrarArray(){
   let contenido = "";
    for (product of  productos_filtrados){
        
       
        contenido+=
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
products.innerHTML = contenido;

}

fetch(URL_PRODUCTS)
.then(response => response.json())
.then(list =>{
    productos_filtrados = list.products;
    productsArray = list.products;
    let encabezado = document.getElementById("catname")
    encabezado.innerHTML +=`${list.catName}`
    mostrarArray();
    
});

btn_descendente_precio.addEventListener("click", function(){
    productsArray.sort((a,b)=>{
        if(a.cost < b.cost){return -1;}
        if(a.cost > b.cost){return 1;}
        return 0;
    });
    filtrar();
    mostrarArray();
})

btn_ascendente_precio.addEventListener("click", function(){
    productsArray.sort((a,b)=>{
        if(a.cost > b.cost){return -1;}
        if(a.cost < b.cost){return 1;}
        return 0;
    });
    filtrar();
    mostrarArray();
})

btn_cantidad_vendido.addEventListener("click", function(){
    productsArray.sort((a,b)=>{
        if(a.soldCount > b.soldCount){return -1;}
        if(a.soldCount < b.soldCount){return 1;}
        return 0;
    });
    filtrar();
    mostrarArray();
})

function filtrar() {
    let min;
    if (cantidad_minima.value !== '' && cantidad_minima.value !== undefined) {
        min = cantidad_minima.value;
    } else {
        min = -Infinity;
    };
    let max;
    if (cantidad_maxima.value !== '' && cantidad_maxima.value !== undefined) {
        max = cantidad_maxima.value;
    } else {
        max = Infinity;
    };
    productos_filtrados = productsArray.filter(producto => producto.cost >= min && producto.cost <= max);
    mostrarArray()
}
boton_filtrar.addEventListener('click', filtrar);

limpiar.addEventListener("click", function(){
    cantidad_maxima.value = "";
    cantidad_minima.value = "";
    filtrar();
    mostrarArray()

})
const filtrar_nombre = ()=>{
    products.innerHTML = "";
    const texto = buscar.value.toLowerCase();
    for(let producto of productsArray){
        let name = producto.name.toLowerCase();
        if(name.indexOf(texto) !== -1){
            products.innerHTML +=` 
            <div class="container">
            
                <div class="list-group-item list-group-item-action cursor-active">
                    <div class="row">
                        <div class="col-3">
                            <img src="${producto.image}" class="img-thumbnail">
                        </div>
                            <div class="col">
                                <div class="d-flex w-100 justify-content-between">
                                    <h4 class="mb-1">${producto.name} - ${producto.currency} ${producto.cost}</h4>
                                    <small>${producto.soldCount} vendidos</small>
                                </div>
                                <p class="mb-1">${producto.description}</p>
                            </div>
                    </div>
                </div>
            </div>`
        }
    }
    if(products.innerHTML === ""){
        products.innerHTML +=`
        <h1>Producto no encontrado...</h1>`
    }
}
buscar.addEventListener("keyup", filtrar_nombre)

