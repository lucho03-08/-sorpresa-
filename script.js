// Obtener elementos
const btnAbrir = document.getElementById("btnAbrir");
const btnCerrar = document.getElementById("btnCerrar");
const tapaSobre = document.getElementById("tapaSobre");
const carta = document.getElementById("contenidoCarta");

// Abrir carta
btnAbrir.addEventListener("click", () => {
       
    tapaSobre.classList.add("abrir-superior");      // Voltea el sobre
  carta.classList.add("visible");                 // Muestra la carta
  
});

// Cerrar carta
btnCerrar.addEventListener("click", () => {
  tapaSobre.classList.remove("abrir-superior");   // Cierra el sobre
  carta.classList.remove("visible");              // Oculta la carta
});
