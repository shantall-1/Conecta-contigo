function enviar() {
    var nombre = document.getElementById("name").value;
    var testimonio = document.getElementById("story").value;

    //MENSAJES
    if (testimonio) {
        console.log("Nombre:", nombre || "Anónimo");
        console.log("Testimonio:", testimonio);
        alert("Gracias por enviar tu testimonio. ¡Apreciamos tus comentarios!");
    
        //LIMPIA FORMULARIO  
        document.getElementById("testimonioForm").reset(); 
    } else {
        alert("Por favor, completa el campo de testimonio antes de enviar.");
    }
}