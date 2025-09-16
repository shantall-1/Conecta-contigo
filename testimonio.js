function enviar() {
    var nombre = document.getElementById("name").value;
    var testimonio = document.getElementById("story").value;

    console.log("Nombre:", nombre);
    console.log("Testimonio:", testimonio);
}


function mostrarMensaje() {
    var testimonio = document.getElementById("story").value;
    if (testimonio) {
        alert("Gracias por enviar tu testimonio. ¡Apreciamos tus comentarios!");
    } else {
        alert("Por favor, completa el campo de testimonio antes de enviar.");
    }
}
document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault();
    enviarYLimpiar(); 
    mostrarMensaje();
});
function enviarYLimpiar() {
    enviar();
    document.getElementById("name").value = "";
    document.getElementById("story").value = "";
}