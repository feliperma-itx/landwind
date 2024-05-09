
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("copyButton").addEventListener("click", function() {
      // Selecciona el texto dentro del elemento h3
      var ibanElement = document.getElementById("number-iban");
      var textToCopy = ibanElement.textContent || ibanElement.innerText;

      // Crea un elemento de textarea oculto para copiar el texto
      var textarea = document.createElement("textarea");
      textarea.value = textToCopy;
      document.body.appendChild(textarea);

      // Selecciona y copia el texto
      textarea.select();
      document.execCommand("copy");

      // Elimina el textarea temporal
      document.body.removeChild(textarea);

      // Muestra un mensaje de éxito
      alert("IBAN copiado: " + textToCopy);
    });
});

// Contador cuenta atras fecha boda
// Fecha de la boda
var weddingDate = new Date("September 14, 2024 13:00:00").getTime();
//var weddingDate = new Date("May 09, 2024 13:00:00").getTime();


// Actualizar el contador cada segundo
var x = setInterval(function() {
  // Fecha y hora actual
  var now = new Date().getTime();

  // Diferencia entre la fecha de la boda y la fecha actual
  var distance = weddingDate - now;

  // Cálculos de días, horas, minutos y segundos
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Actualizar los valores en los divs correspondientes
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // Si llega la fecha de la boda
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").classList.add("hidden");
    document.getElementById("casados").classList.remove("hidden");
    document.getElementById("falta").classList.add("hidden");
    document.getElementById("casados-texto").innerHTML = "🎉 ¡Nos hemos casado! 💍";
  }
}, 1000);
