function enviarFormulario() {
  var información = document.getElementById("infoTopic").value;
  var nombre = document.getElementById("userName").value;
  var email = document.getElementById("userEmail").value;
  var telefono = document.getElementById("userPhone").value;

  if (información === "") {
    alert("Elige que información deseas recibir.");
    return;
  }

  if (nombre === "") {
    alert("Ingresa tu nombre.");
    return;
  }

  if (email === "" && telefono === "") {
    alert("Escribe al menos un correo o teléfono.");
    return;
  }

   //  Guardar en localStorage
  var datosFormulario = {
    información: información,
    nombre: nombre,
    email: email,
    telefono: telefono
  };

  // Convertimos el objeto a cadena JSON y lo guardamos
  localStorage.setItem("formularioContacto", JSON.stringify(datosFormulario));


  // Limpia el formulario
  document.getElementById("infoForm").reset();

  //  Guardar en localStorage
  var datosFormulario = {
    información: información,
    nombre: nombre,
    email: email,
    telefono: telefono
  };

  // convertir en JSON
  localStorage.setItem("formularioContacto", JSON.stringify(datosFormulario));


  // Limpia el formulario
  document.getElementById("infoForm").reset();

  // Mostrar mensaje de éxito
  alert("¡Gracias por tu interés! Nos pondremos en contacto pronto.");
}
