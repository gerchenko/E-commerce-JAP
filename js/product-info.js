let Products = localStorage.getItem("Products");

let PRODUCTS = `https://japceibal.github.io/emercado-api/products/${Products}.json`
let COMMENTS = `https://japceibal.github.io/emercado-api/products_comments/${Products}.json`
let data = [];
fetch(PRODUCTS)
.then(response => response.json())
.then(list =>{
    
    let container = document.getElementById("container")
    container.innerHTML +=`
    <br>
    <div class="position-relative">
    <div class="position-absolute top-0 start-0"><h1>${list.name}</h1></div>
    <div class="position-absolute top-0 end-0"> <button type="button" class="btn btn-success boton" onclick="setProductsCart(${list.id})">Comprar</button></div>
    </div>
        
        
            <br>
                <hr class="mt-5">
                    <div>
                        <h5><b>Precio</b></h5>
                            <p>${list.currency} ${list.cost}</p>
                    </div>
                        <div>
                            <h5><b>Descripción</b></h5>
                                <p>${list.description}</p>
                        </div>
                            <div>
                                <h5><b>Categoría</b></h5>
                                    <p>${list.category}</p>
                            </div>
                                <div>
                                    <h5><b>Cantidad de vendidos</b></h5>
                                        <p>${list.soldCount}</p>
                                </div>
                                    <div>
                                        <h5><b>Imágenes ilustrativas</b></h5>
                                    
                                        <div id="carouselExampleControls" class="carousel slide w-50" data-bs-ride="carousel">
                                            <div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="${list.images[0]}" class="d-block w-100" alt="${list.description}">
    </div>
    <div class="carousel-item">
      <img src="${list.images[1]}" class="d-block w-100" alt="${list.description}">
    </div>
    <div class="carousel-item">
      <img src="${list.images[2]}" class="d-block w-100" alt="${list.description}">
    </div>
    <div class="carousel-item">
      <img src="${list.images[3]}" class="d-block w-100" alt="${list.description}">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
</div>
                                    </div>
                                    
                                    `
                                   

    let relatedproduct = document.getElementById("related-products")
    
    relatedproduct.innerHTML +=`
    <br>
    <br>
    <hr>
    <h4>Productos Relacionados</h4>
    <br>
    <br>
    <div class="col-6 d-flex">
    
    <div class="list-group-item img cursor-active" onclick="setProducts(${list.relatedProducts[0].id})">
    <img src="${list.relatedProducts[0].image}" class="img-thumbnail border-0">
    ${list.relatedProducts[0].name}
    </div>
    
    <div class="list-group-item img cursor-active" onclick="setProducts(${list.relatedProducts[1].id})">
    <img src="${list.relatedProducts[1].image}" class="img-thumbnail border-0">
    ${list.relatedProducts[1].name}
    </div>
    
    
    
    </div>
    `
})
function setProducts(id) {
    localStorage.setItem("Products", id);
    window.location = "product-info.html"
}
    
    
   
    function addComment(){ let comentarios = document.getElementById("comentarios")
    let otrocomentario = "";
for (comentario of  data){
    
   
    otrocomentario+=`
    
            <div class="list-group-item">
                
                    <div><b>${comentario.user}</b> ${comentario.dateTime} - 
                   
                        <span class="fa fa-star ${comentario.score >=1 ? "checked": ""}"></span>
                        <span class="fa fa-star ${comentario.score >=2 ? "checked": ""}"></span>
                        <span class="fa fa-star ${comentario.score >=3 ? "checked": ""}"></span>
                        <span class="fa fa-star ${comentario.score >=4 ? "checked": ""}"></span>
                        <span class="fa fa-star ${comentario.score >=5 ? "checked": ""}"></span>
                    </div>
                        <div>${comentario.description}
                        </div>
                
            </div>`
         comentarios.innerHTML = otrocomentario;   
}
}
    fetch(COMMENTS)
    .then(response => response.json())
    .then(comments =>{
    
        data = comments;
        addComment();
        })
let comentar = document.getElementById("comentar")
comentar.innerHTML+=`<br><h4>Comentar</h4>
<div class="col-6">
<br>
Tu opinión:
  <textarea class="form-control mt-2" placeholder="Dejanos un comentario" id="textarea" style="height: 100px"></textarea>
  
</div>

<br>
Tu puntuación:
<div class="col-2">
    <select class="form-select form-select mt-2" aria-label=".form-select-lg example" id="puntuacion">

        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
    </select>
</div>

<button type="submit" class="btn btn-primary mt-2" id="btn">Enviar</button>
`
let comentario 
let nuevoComentario = document.getElementById("btn")

nuevoComentario.addEventListener("click", function(e){
    
    e.preventDefault();
    let opinion = document.getElementById("textarea")
    let puntuacion = document.getElementById("puntuacion")
    var date = new Date();
    let dateTime = date.getFullYear() + "-" + (date.getUTCMonth()+1) +"-"+ date.getUTCDate()+ " " + (date.getUTCHours() - 3) + ":" + date.getUTCMinutes() + ":" + date.getUTCSeconds();
        comentario = {
        dateTime: dateTime,
        description: opinion.value,
        score: Number(puntuacion.value),
        user: localStorage.getItem("logueado"),
        product: Number(localStorage.getItem("Products"))
    }
    data.push(comentario)
    
    addComment();
    
});

    
   