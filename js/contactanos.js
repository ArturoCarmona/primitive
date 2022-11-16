const validEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
  
  let formulario;

  function enviarEmail(e) {
  
    formulario = {
        nombre: document.getElementById("nombre"),
        email: document.getElementById("email"),
        telefono: document.getElementById("telefono"),
        mensaje: document.getElementById("mensaje")
    }

    e.preventDefault();
    
    if (validForm()){ 
        Swal.fire({
            icon: 'success',
            title: 'El correo ha sido enviado',
            showConfirmButton: false
          })
    }
  }

  function validForm (){  

    // Validacion de todos los inputs
    if (formulario.nombre.value === ""){
        formulario.nombre.classList.add("border-danger");
        document.getElementById("errorNombre").style.display = "block";
        return false;
    } else if (formulario.nombre.classList.contains("border-danger")){
        formulario.nombre.classList.remove("border-danger");
        document.getElementById("errorNombre").style.display = "none";
    }
    if (formulario.email.value === "" || !validEmail(formulario.email.value)){
        formulario.email.classList.add("border-danger");
        document.getElementById("errorEmail").style.display = "block";
        return false;
    } else if (formulario.email.classList.contains("border-danger")){
        formulario.email.classList.remove("border-danger");
        document.getElementById("errorEmail").style.display = "none";
    }
    if(formulario.telefono.value === "" ){
        formulario.telefono.classList.add("border-danger");
        document.getElementById("errorTelefono").style.display = "block";
        return false;
    }else if (formulario.telefono.classList.contains("border-danger")){
        formulario.telefono.classList.remove("border-danger");
        document.getElementById("errorTelefono").style.display = "none";
    }
    if (formulario.mensaje.value === ""){
        formulario.mensaje.classList.add("border-danger");
        document.getElementById("errorMensaje").style.display = "block";
        return false;           
    }else if (formulario.mensaje.classList.contains("border-danger")){
        formulario.mensaje.classList.remove("border-danger");
        document.getElementById("errorMensaje").style.display = "none";

    }
    formulario.nombre = formulario.nombre.value;
    formulario.telefono = formulario.telefono.value;
    formulario.email = formulario.email.value;
    formulario.mensaje = formulario.mensaje.value;
    return true;
  }

  function cargarContacto () {
    let main = document.getElementById("main");
    main.innerHTML = crearPaginaContacto();
    
  }

  function crearPaginaContacto (){
    return '<div class="col-sm-8 offset-sm-2"  style="margin-top:30px">' +
                '</div>' +
            '<div class="col-sm-12" style="margin-top:10px">' +
                '<div class="row justify-content-center">' +
                    '<div class="col-sm-4 d-none d-md-flex align-items-center">' +                                            
                        '<img class="img-thumbnail" src="https://i.ibb.co/xYVBsyf/Sign-in-opcion-6.jpg" alt="imagen" style="height: 700px">' +
                    '</div>' +
                    '<div class="col-sm-4">' +
                        '<p class="p" style="text-align: center;">Agradecemos el interés en <strong>Geekmitive</strong>. Si desea recibir mayor ' +
                            'información sobre alguno de nuestros productos, por favor rellene el siguiente formulario. ' +
                            'Estamos listos para atender sus dudas y solicitudes. <strong>UwU</strong>' +
                        '</p>'+
                        '<form class="row g-3" id="registro">' +
                            '<div class="col-sm-12">' +
                                    '<label for="inputNombre" class="form-label">Nombre</label>' +
                                    '<input type="text" class="form-control" id="nombre" style="background-color:rgb(177, 225, 225);">' +
                                    '<label class="text-danger" style="display: none" id="errorNombre">*campo requerido</label>' +
                            '</div>' +
                            '<div class="col-sm-12">' +
                                    '<label for="inputemail" class="form-label">e-mail</label>' +
                                    '<input type="email" class="form-control" id="email" style="background-color:rgb(177, 225, 225);">' +
                                    '<label class="text-danger" style="display: none" id="errorEmail">*campo requerido/formato inválido</label>' +
                            '</div>' +
                            '<div class="col-sm-12">' +
                                    '<label for="inputTelefono" class="form-label">Teléfono</label>' +
                                    '<input type="number" class="form-control" id="telefono" style="background-color:rgb(177, 225, 225);">' +
                                    '<label class="text-danger" style="display: none" id="errorTelefono">*campo requerido</label>' +
                            '</div>' +
                            '<div class="col-sm-12">' +
                                    '<label for="inputMensaje" class="form-label">Mensaje</label>' +
                                    '<textarea class="form-control" id="mensaje" rows="5" style="background-color:rgb(177, 225, 225);"></textarea>' +
                                    '<label class="text-danger" style="display: none" id="errorMensaje">*campo requerido</label>' +
                            '</div>' +
                            '<div class="col-sm-12 d-flex justify-content-center">' +
                                    '<form method="post">' +
                                    '<button onclick="enviarEmail(event)" type="submit" class="btn-enviar">Enviar</button></form>' +
                            '</div>' +
                        '</form>' +
                    '</div>' +
                '</div>' +
            '</div>';
  }
