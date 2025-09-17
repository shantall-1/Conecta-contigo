document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formOpiniones");
  const mensaje = document.getElementById("mensajeConfirmacion");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Armar objeto con las respuestas
    const respuesta = {
      recomendacion: document.getElementById("recomendacion").value,
      importa: document.getElementById("importa").value,
      implementar: document.getElementById("implementar").value,
      importancia: document.querySelector('input[name="importancia"]:checked').value,
      satisfaccion: document.querySelector('input[name="satisfaccion"]:checked').value,
      fecha: new Date().toLocaleString()
    };

    // Mostrar en consola (para que veas qué se capturó)
    console.log("Respuesta guardada:", respuesta);

    // Guardar en Local Storage como JSON
    let respuestas = JSON.parse(localStorage.getItem("respuestas")) || [];
    respuestas.push(respuesta);
    localStorage.setItem("respuestas", JSON.stringify(respuestas));

    //Mostrar mensaje de confirmación
    mensaje.style.display = "block";

    // Limpiar formulario
    form.reset();
  });
});

document.getElementById("formOpiniones").addEventListener("submit", function(e) {
  e.preventDefault(); // evita que se recargue la página

  // Mostrar confirmación
  const mensaje = document.getElementById("mensajeConfirmacion");
  mensaje.style.display = "block";

  // Lista de frases motivacionales
  const frases = [
    "✨ Recuerda: tu bienestar es lo más importante.",
    "💙 Cada paso que das cuenta, sigue adelante.",
    "🌸 Está bien pedir ayuda, no estás sola.",
    "☀️ Mereces sentirte bien y estar en paz.",
    "🌈 Cuida tu mente tanto como cuidas tu corazón."
  ];

  // Escoger una frase aleatoria
  const frase = frases[Math.floor(Math.random() * frases.length)];

  // Crear o mostrar un párrafo con la frase motivacional
  let motivacion = document.getElementById("fraseMotivacional");
  if (!motivacion) {
    motivacion = document.createElement("p");
    motivacion.id = "fraseMotivacional";
    motivacion.style.marginTop = "1rem";
    motivacion.style.fontWeight = "600";
    motivacion.style.color = "#4B9CAE";
    mensaje.insertAdjacentElement("afterend", motivacion);
  }
  motivacion.textContent = frase;
});

