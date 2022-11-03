
let nombre, telefono, email;

function validarForm (){
    //validando cada input
    if(nombre.value === ""){
        nombre.classList.add("border-danger");
        document.getElementById("errorNombre").style.display = "block";
        return false;
    }else if (nombre.classList.contains("border-danger")){
        nombre.classList.remove("border-danger");
        document.getElementById("errorNombre").style.display = "none";
    }
    if(telefono.value === "" ){
        telefono.classList.add("border-danger");
        document.getElementById("errorTelefono").style.display = "block";
        return false;
    }else if (telefono.classList.contains("border-danger")){
        telefono.classList.remove("border-danger");
        document.getElementById("errorTelefono").style.display = "none";
    }
    if (email.value === "" || !validarEmail(email.value)){
        email.classList.add("border-danger");
        document.getElementById("errorEmail").style.display = "block";
        return false;
    } else if (email.classList.contains("border-danger")){
        email.classList.remove("border-danger");
        document.getElementById("errorEmail").style.display = "none";
    }
    if (password.value === ""){
        password.classList.add("border-danger");
        document.getElementById("errorPassword").style.display = "block";
        return false;           
    }else if (password.classList.contains("border-danger")){
        password.classList.remove("border-danger");
        document.getElementById("errorPassword").style.display = "none";
    }
    return true;
}

//JSON SECTION
let usuarios = [];

function signUp(){
    Swal.fire({
        width: 1200,
        html: '<div class="container w-75 mt-5 rounded">'+
            '<div class="row align-items-stretch">'+
                '<div class="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded">'+
                    '<!--d-none y d-lg-block son pa el responsive, none indica que no muestre la imagen cuando esté muy pequeña la ventana, lg block indica que si se muestre a partir de cierto tamaño-->'+
                '</div>'+
            '<div class="col p-5 rounded-end">'+
            '<div class="tex-end">'+
            '</div>'+
            '<h2 class="fw-bold text-center py-5">Registrate, es gratis💜</h2>'+
            
            '<!--inputs con sus labels y propiedades, cada uno en su div-->'+
            '<form name="form" action="#" method="post">'+
                '<div class="mb-4">'+
                    '<label for="nombre" class="form-label">Nombre</label>'+
                    '<input type="text" class="form-control" id="nombre" placeholder="xXxNarutoxXx ">'+
                    '<label class="text-danger" style="display: none" id="errorNombre">*campo requerido</label>' +
                '</div>'+
                '<div class="mb-4">'+
                    '<label for="numtel" class="form-label">Numero telefónico</label>'+
                    '<input type="number" class="form-control" placeholder="+529996663333" id="telefono">'+
                    '<label class="text-danger" style="display: none" id="errorTelefono">*campo requerido</label>' +
                '</div>'+
                '<div class="mb-4">'+
                    '<label for="email" class="form-label">Correo Electrónico</label>'+
                    '<input type="email" class="form-control" id="email" placeholder="example@mail.com">'+
                    '<label class="text-danger" style="display: none" id="errorEmail">*campo requerido</label>' +
                '</div>'+
                '<div class="mb-4">'+
                    '<label for="password" class="form-label">Contraseña</label>'+
                    '<input type="password" class="form-control" id="password" placeholder="soygeekyque123">'+
                    '<label class="text-danger" style="display: none" id="errorPassword">*campo requerido</label>' +
                '</div>'+
            '</form>'+
        '</div>'+
        '</div>'+
        '</div>',
    confirmButtonText: "Registrarse",
    showConfirmButton: true,
    preConfirm: () => {    
        nombre = document.getElementById("nombre");
        telefono = document.getElementById("telefono");
        email = document.getElementById("email");
        password = document.getElementById("password");
        
        return new Promise( (resolve, reject) => {
            if (!validarForm()){
                reject("Favor de validar los campos");
            } else {
                resolve(true);
            }
        }).then((res)=>{
            if(!res){
                throw new Error(res);
            } else 
                return true;
        }).catch(()=>{
            return false;
        });
    }
    }).then (function(res){
        if (res.isConfirmed){
            usuarios.push({
                userName: document.getElementById('nombre').value,
                number: document.getElementById('telefono').value,
                UserEmail: document.getElementById('email').value,
                UserPassword: document.getElementById('password').value
            });

            document.forms[0].reset(); //to clear for next entries 
        
            //saving to localstorage
            localStorage.setItem('MyUsersList', JSON.stringify(usuarios));
            Swal.fire("¡Felicidades!", "Te has registrado con éxito.", "success");
        }
    });
}