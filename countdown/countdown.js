import Countdown from "../constructorCountdown.js";

const bt = document.querySelector(".bt");
bt.addEventListener("click", clickHandler);
let checagem = false;
let countdown;
const listaCountdown = document.querySelectorAll(".countdown");

function clickHandler() {
  if (!checagem) {
    listaCountdown.forEach((elemento) => {
      elemento.classList.add("ativo");
    });
    const nomeEvento = document.querySelector("#nomeEvento").value;
    const calendario = new Date(document.querySelector("#data").value);
    contador(new Countdown(nomeEvento, calendario));
    checagem = true;
  } else {
    clearInterval(countdown);
    const nomeEvento = document.querySelector("#nomeEvento").value;
    const calendario = new Date(document.querySelector("#data").value);
    contador(new Countdown(nomeEvento, calendario));
    checagem = true;
  }
}

function contador(data) {
  const dias = document.querySelector(".dias");
  const horas = document.querySelector(".horas");
  const minutos = document.querySelector(".minutos");
  const segundos = document.querySelector(".segundos");
  const evento = document.querySelector(".evento");
  countdown = setInterval(() => {
    dias.innerHTML = data.total.dias + "<br>dias";
    horas.innerHTML = data.total.horas + "<br>horas";
    minutos.innerHTML = data.total.minutos + "<br>minutos";
    segundos.innerHTML = data.total.segundos + "<br>segundos";
  }, 1000);
  evento.innerText = `Para ${data.evento}`;
}
