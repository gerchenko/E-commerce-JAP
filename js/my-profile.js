// Example starter JavaScript for disabling form submissions if there are invalid fields
const emailPerfil = document.getElementById("emailPerfil")
const firstName = document.getElementById("firstName")
const secondName = document.getElementById("secondName")
const firstSurname = document.getElementById("firstSurname")
const secondSurname = document.getElementById("secondSurname")
const telephone = document.getElementById("telephone")

emailPerfil.value = localStorage.getItem("logueado")
firstName.value = localStorage.getItem("firstName")
secondName.value = localStorage.getItem("secondName")
firstSurname.value = localStorage.getItem("firstSurname")
secondSurname.value = localStorage.getItem("secondSurname")
telephone.value = localStorage.getItem("telephone")


    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    forms.forEach(form => {
      form.addEventListener('submit', event => {
        event.preventDefault()
        localStorage.setItem("firstName", firstName.value)
        localStorage.setItem("secondName", secondName.value)
        localStorage.setItem("firstSurname", firstSurname.value)
        localStorage.setItem("secondSurname", secondSurname.value)
        localStorage.setItem("telephone", telephone.value)

        if (!form.checkValidity()) {
          event.stopPropagation()
          
        }
  
        form.classList.add('was-validated')
      }, false)
    })

