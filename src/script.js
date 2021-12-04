// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else {
            RegistrarUsuario();
            event.preventDefault()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  function RegistrarUsuario(){
    //alert("Usuario Almacenado OK")

    let nombres = document.querySelector("#txtNombres").value;
    let apellidos = document.querySelector("#txtApellidos").value;
    let correo = document.querySelector("#txtCorreo").value;
    let celular = document.querySelector("#txtCelular").value;

    let url =`http://127.0.0.1:3000/usuarios`;
    let datos = {
      nombres : nombres,
      apellidos : apellidos,
      correo : correo,
      celular : celular
    };
    fetch(url, {
      method: 'POST',
      body : JSON.stringify(datos),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res => res.json())
    .then(mensaje => {
      console.log(mensaje)
    })
  }