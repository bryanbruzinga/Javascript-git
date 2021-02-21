//Programa de cep
const inputCep = document.querySelector('#cep')
const resultCep = document.querySelector('.resultado')
const btnCep = document.querySelector('.botao')

function handleClick(event) {
    event.preventDefault()
    const cep = inputCep.value
    buscaCep(cep)
}

function buscaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.text()).then(body => {
        resultCep.innerText = body
    })
}

btnCep.addEventListener('click', handleClick)

//Programa de Bitcoin
const btcDisplay = document.querySelector('.btc')

function fetchBtc() {
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(btcJson => {
        btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',')
    })
}
setInterval(fetchBtc, 1000 * 30)
fetchBtc()

//Programa de Chuck Norris

const chuck = document.querySelector('.chuck')
const btnChuck = document.querySelector('.btn-chuck')

function proximaPiada() {
    fetch('https://api.chucknorris.io/jokes/random').then(r => r.json())
    .then(jokes => {
        chuck.innerText = jokes.value
    })
}
proximaPiada()

btnChuck.addEventListener('click', proximaPiada)