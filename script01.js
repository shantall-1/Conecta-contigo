// [Función principal para calcular el resultado del test]
function calcularResultado() {
  // [Referencias al formulario y al contenedor de resultados]
  const form = document.getElementById("mentalHealthTest");
  const resultado = document.getElementById("resultado");
  let puntaje = 0;

  // [Obtención de datos personales del usuario]
  const nombre = form.querySelector("#nombre").value.trim();
  const edad = form.querySelector('input[name="edad"]').value.trim();
  const genero = form.querySelector('input[name="genero"]:checked');

  // [Validación de datos personales]
  if (!nombre || !edad || !genero) {
    resultado.textContent = "Por favor, completa todos los datos personales.";
    console.log("Faltan datos personales.");
    return;
  }

  // [Inicializar array para guardar respuestas]
  let respuestasSeleccionadas = [];

  // [Recorrer las preguntas y sumar el puntaje]
  for (let i = 1; i <= 4; i++) {
    const respuesta = form.querySelector(`input[name="q${i}"]:checked`);
    if (respuesta) {
      puntaje += parseInt(respuesta.value);
      respuestasSeleccionadas.push({
        pregunta: `q${i}`,
        valor: parseInt(respuesta.value)
      });
    } else {
      resultado.textContent = "Por favor, responde todas las preguntas.";
      console.log("Faltan preguntas por responder.");
      return;
    }
  }

  // [Interpretación del resultado]
  let mensaje = "";
  if (puntaje <= 3) {
    mensaje = "Tu salud mental parece estar en buen estado. Sigue cuidándote.";
  } else if (puntaje <= 6) {
    mensaje = "Podrías estar experimentando algunos signos de estrés o ansiedad. Considera hacer pausas y cuidar tu bienestar.";
  } else if (puntaje <= 9) {
    mensaje = "Tu salud mental podría estar afectada. Sería recomendable hablar con un profesional.";
  } else {
    mensaje = "Parece que estás pasando por un momento difícil. No estás solo/a, busca ayuda profesional.";
  }

  // [Mostrar resultado en pantalla]
  resultado.innerText = `Puntaje: ${puntaje} - ${mensaje}`;

  // [Mostrar resultado en consola]
  console.log("===== RESULTADO DEL TEST =====");
  console.log("Nombre:", nombre);
  console.log("Edad:", edad);
  console.log("Género:", genero.value);
  console.log("Puntaje total:", puntaje);
  console.log("Interpretación:", mensaje);
  console.log("==============================");

  // [Guardar resultado en Local Storage]
  const nuevaEntrada = {
    nombre,
    edad,
    genero: genero.value,
    respuestas: respuestasSeleccionadas,
    puntaje,
    mensaje,
    fecha: new Date().toISOString()
  };

  let historial = JSON.parse(localStorage.getItem("respuestas")) || [];
  historial.push(nuevaEntrada);
  localStorage.setItem("respuestas", JSON.stringify(historial));
}

// [Soporte para presionar Enter y ejecutar el test]
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    calcularResultado();
    console.log("Enter presionado: se ejecutó el test.");
  }
});
