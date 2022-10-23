let productsCart = localStorage.getItem("ProductsCart");
const CARRITO = `https://japceibal.github.io/emercado-api/user_cart/25801.json`
let carrito = document.getElementById("carrito")
let productsdelcarrito = document.getElementById("bodytable")

fetch(CARRITO)
.then(response => response.json())
.then(data =>{
  productCart()
}) 
    
function productCart(){
let productsCarrito ="";
for (let list of  cart){
productsCarrito+=`
<tr>
    <th scope="row"><img src="${list.image}" class="img-fluid" style="width:50px;"/></th>
        <td>${list.name}</td>
        <td id="cost">${list.currency} ${list.unitCost}</td>
        <td><div class="col-2"><input  onkeyup="subTotal()" onclick="subTotal()" class="form-control" id="cantidad" type="number" value="${list.count}"/></div></td>
        <td id="finalPrice">${list.unitCost*list.count}</td>
</tr>`
productsdelcarrito.innerHTML = productsCarrito
}
}


function subTotal(){
let finalPrice = document.getElementById("finalPrice")

let cantidadValor = document.getElementById("cantidad")

let price = document.getElementById("cost")
price = price.textContent 
let indice = price.indexOf(" ")
price = price.substring(indice,price.length)
finalPrice.innerHTML = cantidadValor.value*parseInt(price)

}
