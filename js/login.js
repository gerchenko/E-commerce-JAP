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

function onSignIn(googleUser) {
    // Useful data for your client-side scripts:
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail());

    // The ID token you need to pass to your backend:
    // var id_token = googleUser.getAuthResponse().id_token;
    // console.log("ID Token: " + id_token);
  }

