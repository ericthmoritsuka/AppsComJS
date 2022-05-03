// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

let texto = document.querySelector(".blockchain");
let mensagem = ''
const btBTC = document.querySelector(".btRefreshBTC");

const blockchain = () => {
  fetch(`https://blockchain.info/ticker`)
    .then((response) => response.json())
    .then((btc) => {
      const compra = (''+ btc.BRL.buy).replace('.', ',')
      const venda = (''+ btc.BRL.sell).replace('.', ',')

      mensagem = `O valor de compra de uma BITCOIN em ${btc.BRL.symbol} é R$ ${compra}. O valor de venda é R$ ${venda}`
      texto.innerText = mensagem;
    });
};

btBTC.addEventListener('click', blockchain);

// setInterval(blockchain, 500)

blockchain();
