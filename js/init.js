const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/";
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";
const CARRIT0 = `https://japceibal.github.io/emercado-api/user_cart/25801.json`

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}
let navEmail = document.getElementById("navEmail")
navEmail.innerHTML += `<div class="dropdown">

  <a class="nav-link" dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  <span class="nav-item">${localStorage.getItem("logueado")}<i class="fa-solid fa-chevron-down iconWhite"></i></span>
  </a>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="/cart.html">Mi carrito</a></li>
    <li><a class="dropdown-item" href="/my-profile.html">Mi perfil</a></li>
    <li><a class="dropdown-item" onclick="localStorage.clear() "href="/login.html">Cerrar sesión</a></li>
  </ul>
  
</div>`

let cart = JSON.parse(localStorage.getItem("cart")) || [];
fetch(CARRIT0)
.then(response => response.json())
.then(data =>{
if(cart.length===0){
  cart.push(data.articles[0])
}
console.log(cart)
})

