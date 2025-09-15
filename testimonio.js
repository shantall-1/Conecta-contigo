function enviar() {
    var nombre = document.getElementById("name").value;
    var testimonio = document.getElementById("story").value;

    console.log("Nombre:", nombre);
    console.log("Testimonio:", testimonio);
}

//Mensaje de agradecimiento por mandar el testimonio si lleno el campo de testimonio de lo contrario poner un mensaje de error
function mostrarMensaje() {
    var testimonio = document.getElementById("story").value;
    if (testimonio) {
        alert("Gracias por enviar tu testimonio. ¡Apreciamos tus comentarios!");
    } else {
        alert("Por favor, completa el campo de testimonio antes de enviar.");
    }
}

//