let productsCart = localStorage.getItem("ProductsCart");
const CARRITO = `https://japceibal.github.io/emercado-api/user_cart/25801.json`
let carrito = document.getElementById("carrito")

fetch(CARRITO)
.then(response => response.json())
.then(list =>{
    carrito.innerHTML+=`<h1 style="text-align:center;">Carrito de compras</h1>
                            <h2>Articulos a comprar</h2>
                                <div>
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col"></th>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Costo</th>
                                                <th scope="col">Cantidad</th>
                                                <th scope="col">Subtotal</th>
                                            </tr>
                                        </thead>
                                            <tr>
                                                <th scope="row"><img src="${list.articles[0].image}" class="img-fluid" style="width:50px;"/></th>
                                                <td>${list.articles[0].name}</td>
                                                <td id="cost">${list.articles[0].currency} ${list.articles[0].unitCost}</td>
                                                <td><div class="col-2"><input  onkeyup="subTotal()" onclick="subTotal()" class="form-control" id="cantidad" type="number" value="${list.articles[0].count}"/></div></td>
                                                <td id="finalPrice">${list.articles[0].unitCost*list.articles[0].count}</td>
                                                
                                            </tr>
                                            <div id="productCart">
                                            
                                            </div>
                                          
                                            
                                            
                                    </table>
                                </div>
    <hr>
    <h2>Tipo de envio</h2>
    <br>
    <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked>
  <label class="form-check-label" for="flexRadioDefault1">
    Premium 2 a 5 dias (15%)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
  <label class="form-check-label" for="flexRadioDefault2">
    Express 5 a 8 dias (7%)
  </label>
</div>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2">
  <label class="form-check-label" for="flexRadioDefault3">
    Standard 12 a 15 dias 5%)
  </label>
</div>
<br>
<h2>Direccion de envio</h2>
<div class="d-flex ">
<div class="mb-3 col-3 img">
<label for="FormControlInput1" class="form-label">Calle</label>
<input type="text" class="form-control" id="FormControlInput1">
</div>
<div class="mb-3 col-2">
  <label for="FormControlInput2" class="form-label">Numero</label>
  <input type="number" class="form-control" id="FormControlInput2">
</div>
</div>
<div class="mb-3 col-3">
  <label for="FormControlInput3" class="form-label">Esquina</label>
  <input type="text" class="form-control" id="FormControlInput3">
</div>
    `
})

function subTotal(){
let finalPrice = document.getElementById("finalPrice")

let cantidadValor = document.getElementById("cantidad")

let price = document.getElementById("cost")
price = price.textContent 
let indice = price.indexOf(" ")
price = price.substring(indice,price.length)
finalPrice.innerHTML = cantidadValor.value*parseInt(price)

}
