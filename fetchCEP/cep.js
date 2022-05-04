// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

const inputCEP = document.getElementById("cep");
const btCEP = document.getElementById("btCEP");

const handleClick = (event) => {
  event.preventDefault();
  const cep = inputCEP.value;
  buscaCEP(cep);
};

const buscaCEP = (cep) => {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.json())
    .then((body) => {
      const resultado = document.querySelector(".resultadoCEP");
      let texto = `O cep ${body.cep} é referente a(o) ${body.logradouro} no bairro ${body.bairro}. Esse endereço está localizado na cidade de ${body.localidade}, em ${body.uf} e o ddd é ${body.ddd}.`;
      resultado.innerText = texto;
    })
    .catch(erro => {
      const resultado = document.querySelector(".resultadoCEP");
      resultado.innerText = 'Algo inesperado ocorreu. Tente novamente.'
    });
};

btCEP.addEventListener("click", handleClick);
