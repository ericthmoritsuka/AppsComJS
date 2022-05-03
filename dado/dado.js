const dados = document.querySelectorAll(".dado");
let resultado = document.querySelector(".resultado").innerText;

const dadoHandler = () => {
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  };

  let numero = getRandomInt(1, 7).toString();
  let classe = "";

  if (numero === "1") {
    classe = "um";
  } else if (numero === "2") {
    classe = "dois";
  } else if (numero === "3") {
    classe = "tres";
  } else if (numero === "4") {
    classe = "quatro";
  } else if (numero === "5") {
    classe = "cinco";
  } else if (numero === "6") {
    classe = "seis";
  }

  dados.forEach((dado) => {
    if (dado.classList.contains("ativo")) {
      dado.classList.toggle("ativo");
    }
    if (dado.classList.contains(classe)) {
      dado.classList.toggle("ativo");
    }
  });

  resultado = `Você tirou ${classe}`;
};

dados.forEach((dado) => {
  dado.addEventListener("click", dadoHandler);
});
