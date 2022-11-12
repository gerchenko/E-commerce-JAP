let productsCart = localStorage.getItem("ProductsCart");
const CARRITO = `https://japceibal.github.io/emercado-api/user_cart/25801.json`
let carrito = document.getElementById("carrito")
let productsdelcarrito = document.getElementById("bodytable")
const total = document.getElementById("total")
const subtotal = document.getElementById("subtotal")
const envio = document.getElementById("envio")


fetch(CARRITO)
.then(response => response.json())
.then(list =>{
  productsdelcarrito.innerHTML = 
  `<tr>
  <th scope="row"><img src="${list.articles[0].image}" class="img-fluid" style="width:50px;"/></th>
  <td>${list.articles[0].name}</td>
  <td id="cost">${list.articles[0].currency} ${list.articles[0].unitCost}</td>
  <td><div class="col-2"><input  onkeyup="subTotal()" onclick="subTotal()" class="form-control" id="cantidad" type="number" min="1" value="${list.articles[0].count}"/></div></td>
  <td id="finalPrice">${list.articles[0].unitCost*list.articles[0].count}</td>
  
</tr>`
subtotal.innerHTML = `${list.articles[0].unitCost}` 
}) 

function subTotal(){
let finalPrice = document.getElementById("finalPrice")

let cantidadValor = document.getElementById("cantidad")

let price = document.getElementById("cost")
price = price.textContent 
let indice = price.indexOf(" ")
price = price.substring(indice,price.length)
finalPrice.innerHTML = cantidadValor.value*parseInt(price)
subtotal.innerHTML = `${cantidadValor.value*parseInt(price)}`
Calculated()
}
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  forms.forEach(form => {
    let seleccionarMetodo = document.getElementById("seleccionarMetodo")
    form.addEventListener('submit', event => {
      event.preventDefault()
      event.stopPropagation()

      if (form.checkValidity()) {
        showAlertSuccess()
      }

      seleccionarMetodo.style = "display: block"
      form.classList.add('was-validated')
    }, false)
  })
})()

function showAlertSuccess() {
  let alert = document.getElementById("alert-success");
      alert.style.display="block";
}

const radioCard = document.getElementById("radioCard")
const radioTrans = document.getElementById("radioTrans")
const numero = document.getElementById("numero")

const premium = document.getElementById("premium")
const express = document.getElementById("express")
const standard = document.getElementById("standard")

function Calculated(){
  let envioTotal = 0
if(premium.checked){
  envioTotal = subtotal.innerText * 0.15
}
else if (express.checked){
  envioTotal = subtotal.innerText* 0.07
}
else if(standard.checked){
  envioTotal = subtotal.innerText * 0.05
}
envio.innerHTML = `USD ${envioTotal}`
finalCost()
}

function finalCost(){
   total.innerHTML = parseInt(subtotal.innerText) + parseInt(envio.innerText.split(" ")[1]) 
}

const numeroCuenta = document.getElementById("numeroCuenta")
const vencimiento = document.getElementById("vencimiento")
const codigo = document.getElementById("codigo")

function metodoTransferencia(){
  
numero.setAttribute("disabled", true)
vencimiento.setAttribute("disabled", true)
codigo.setAttribute("disabled", true)

numeroCuenta.removeAttribute("disabled")

}
function metodoTarjeta(){
  numero.removeAttribute("disabled")
vencimiento.removeAttribute("disabled")
codigo.removeAttribute("disabled")

numeroCuenta.setAttribute("disabled", true)
}

/* let terminos = document.getElementById("terminos") */


radioCard.addEventListener("click", ()=>{
  let metodoPago = document.getElementById("metodoPago")
  
  if(radioCard.checked){
   
    metodoPago.textContent = "Tarjeta de credito"
    let seleccionarMetodo = document.getElementById("seleccionarMetodo")
    seleccionarMetodo.className = "valid-feedback d-none" 
  }

})

radioTrans.addEventListener("click", ()=>{
  let metodoPago = document.getElementById("metodoPago")
if(radioTrans.checked){
    
  metodoPago.textContent = "Transferencia Bancaria"
  let seleccionarMetodo = document.getElementById("seleccionarMetodo")
  seleccionarMetodo.className = "valid-feedback d-none" 
 
}
})