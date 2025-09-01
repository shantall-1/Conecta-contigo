function calcularResultado() {
      const form = document.forms["formulario-salud"];
      let total = 0;
      for (let i = 1; i <= 5; i++) {
        const respuesta = form["q" + i].value;
        if (!respuesta) {
          alert("Por favor responde todas las preguntas.");
          return;
        }
        total += parseInt(respuesta);
      }

      const resultado = document.getElementById("resultado");
      resultado.classList.add("mostrar");

      if (total <= 4) {
        resultado.style.background = "#dcfce7";
        resultado.style.color = "#166534";
        resultado.textContent = "✅ Tu salud mental parece estar en buen estado. Sigue cuidándote.";
      } else if (total <= 8) {
        resultado.style.background = "#fef9c3";
        resultado.style.color = "#854d0e";
        resultado.textContent = "💛 Podrías estar experimentando algunas señales de estrés o cansancio. Considera hacer pausas, dormir mejor o hablar con alguien.";
      } else if (total <= 12) {
        resultado.style.background = "#fee2e2";
        resultado.style.color = "#991b1b";
        resultado.textContent = "🔴 Hay varios signos de malestar. Podría ayudarte hablar con un profesional de la salud mental.";
      } else {
        resultado.style.background = "#7f1d1d";
        resultado.style.color = "#fff";
        resultado.textContent = "🚨 Tu salud mental podría estar comprometida. Busca apoyo profesional lo antes posible. ¡No estás solo!";
      }
    }

function calcularResultado() {
    let formulario = document.getElementById("formsalud")

    usuario.name = formulario.name.value
    usuario.age = formulario.age.value
    usuario.sexo = formulario.sexo.value

    console.log(usuario)
        }
