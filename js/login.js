const form = document.querySelector("form")
const email = document.getElementById("email")
const password = document.getElementById("password")

form.addEventListener("submit", function(e){
    e.preventDefault();
    if(email.value.length === 0){
        icono_email.classList.add('icono_error');
        text_email.classList.add("text");
        email.style.border="0.5px solid red";
        }
    if(password.value.length === 0){
        icono_password.classList.add('icono_error');
        text_password.classList.add("text");
        password.style.border="0.5px solid red";

    }
    if(password.value.length > 0 && email.value.length > 0){
    
            location.href = "https://gerchenko.github.io/E-commerce-JAP/";
          
      
}}); 

window.response = (response) => {
    console.log(response)
    window.location.href = "https://gerchenko.github.io/E-commerce-JAP/";
}


