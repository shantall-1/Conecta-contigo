function enviarFormulario() {
  var nombre = document.getElementById("userName").value;
  var email = document.getElementById("userEmail").value;
  var telefono = document.getElementById("userPhone").value;

  if (nombre === "") {
    alert("Ingresa tu nombre.");
    return;
  }

  if (email === "" && telefono === "") {
    alert("Escribe al menos un correo o teléfono.");
    return;
  }

  // Limpia el formulario
  document.getElementById("infoForm").reset();

  // Cierra el modal (correctamente con Bootstrap)
  var modalElement = document.getElementById('infoModal');
  var modalInstance = bootstrap.Modal.getInstance(modalElement);
  if (!modalInstance) {
    modalInstance = new bootstrap.Modal(modalElement);
  }
  modalInstance.hide();

  alert("Gracias por contactarnos.");
}
