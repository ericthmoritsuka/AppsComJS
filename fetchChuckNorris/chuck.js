// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima

const bt = document.querySelector('.btPiada');

const piada = () => {
  fetch(`https://api.chucknorris.io/jokes/random`)
  .then((response) => response.json())
  .then((body)=>{
    const texto = document.querySelector('.piada')
    texto.innerText = body.value
  })
}

bt.addEventListener('click', piada)
piada()