//validar un formulario de recuperacion
document.getElementById("formLogin").addEventListener("submit", function(e){

    e.preventDefault();

    const correo = document.getElementById("loginCorreo").value;

    if(correo === ""){
        alert("Por favor ingrese un correo electrónico.");
        return;
    }

    alert("Se ha enviado un enlace de recuperación a: " + correo);

});


//mostrar contraseña al inicio de sesion

function mostrarPassword(){

    let campo = document.getElementById("password");

    if(campo.type === "password"){
        campo.type = "text";
    }else{
        campo.type = "password";
    }

}



function pagar() {

    let metodo = document.querySelector('input[name="pago"]:checked');

    if (!metodo) {
        alert("Seleccione un método de pago");
        return;
    }

    alert("Compra realizada exitosamente con: " + metodo.value);

}