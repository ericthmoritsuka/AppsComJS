import Countdown from "../constructorCountdown.js";

const bt = document.querySelector(".bt");
bt.addEventListener("click", clickHandler);
let checagem = false;
let countdown;

function clickHandler() {
  if (!checagem) {
    console.log('primeira vez')
    const nomeEvento = document.querySelector("#nomeEvento").value;
    const calendario = new Date(document.querySelector("#data").value);
    contador(new Countdown(nomeEvento, calendario));
    checagem = true;
  } else {
    clearInterval(countdown);
    console.log('clear interval')
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
    dias.innerText = data.total.dias + " dias";
    horas.innerText = data.total.horas + " horas";
    minutos.innerText = data.total.minutos + " minutos";
    segundos.innerText = data.total.segundos + " segundos";
  }, 1000);
  evento.innerText = `Para ${data.evento}`;
}
