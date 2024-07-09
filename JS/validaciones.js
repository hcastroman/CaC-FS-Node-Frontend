const nombre = document.getElementById("name");
const correo = document.getElementById("email");
const mensaje = document.getElementById("message");
const telefono = document.getElementById("phone");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e => {
    e.preventDefault();

    let warnings = "";
    let enviado = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

    parrafo.innerHTML = "";

    if (nombre.value.length < 1) {
        window.alert("EL NOMBRE NO PUEDE QUEDAR EN BLANCO")        
        enviado = true;
    }

    if (!regexEmail.test(correo.value)) {
        window.alert("EL EMAIL NO PUEDE QUEDAR EN BLANCO")
        enviado = true;
    }

    if (mensaje.value.length < 5) {
        window.alert("EL MENSAJE NO PUEDE QUEDAR EN BLANCO")
        enviado = true;
    }

    if (telefono.value.length < 5) {
        window.alert("EL TELEFONO NO PUEDE QUEDAR EN BLANCO")
        enviado = true;
    }

    if (enviado) {
        parrafo.innerHTML = warnings;
    } else
    window.alert("TU RESERVA SE HA EFECTUADO CON EXITO")

});