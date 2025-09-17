function enviarFormulario() {
  const topic = document.getElementById("infoTopic").value;
  const name = document.getElementById("userName").value.trim();
  const email = document.getElementById("userEmail").value.trim();
  const phone = document.getElementById("userPhone").value.trim();

  if (!name) {
    alert("Por favor ingresa tu nombre.");
    return;
  }

  if (!email && !phone) {
    alert("Debes proporcionar al menos un correo electrónico o número de teléfono.");
    return;
  }

  // Aquí puedes hacer un fetch/post al backend si lo tienes.
  console.log("Formulario enviado:");
  console.log({ topic, name, email, phone });

  // Limpia el formulario y cierra el modal
  document.getElementById("infoForm").reset();
  const modal = bootstrap.Modal.getInstance(document.getElementById('infoModal'));
  modal.hide();

  alert("Gracias por tu interés. Te contactaremos pronto.");
}
