let inicio = null;
let intervalo = null;
let tiempoTranscurrido = 0;

const mostrarTiempo = () => {
  const tiempo = Date.now() - inicio + tiempoTranscurrido;
  const minutos = Math.floor(tiempo / 60000).toString().padStart(2, '0');
  const segundos = Math.floor((tiempo % 60000) / 1000).toString().padStart(2, '0');
  const milisegundos = (tiempo % 1000).toString().padStart(3, '0');
  document.getElementById("tiempo").textContent = `${minutos}:${segundos}:${milisegundos}`;
};

document.getElementById("iniciar").addEventListener("click", () => {
  if (!intervalo) {
    inicio = Date.now();
    intervalo = setInterval(mostrarTiempo, 10);
  }
});

document.getElementById("pausar").addEventListener("click", () => {
  if (intervalo) {
    clearInterval(intervalo);
    tiempoTranscurrido += Date.now() - inicio;
    intervalo = null;
  }
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(intervalo);
  inicio = null;
  tiempoTranscurrido = 0;
  intervalo = null;
  document.getElementById("tiempo").textContent = "00:00:000";
});