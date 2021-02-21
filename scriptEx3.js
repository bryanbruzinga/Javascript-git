//Retorne um número aleatório entre 1500 e 2000
const random = Math.floor(Math.random() * (2000 - 1050 + 1)+ 1050)
console.log(random)


//Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9'

const corte = numeros.split(', ')

const maximo = Math.max(...corte)
//... é usado para distribuir o array como argumento
console.log(maximo)

//Crie uma função para limpar os preços e retornar os números com centavos arredondados e depois retorna a soma total
const listaPrecos = ['R$ 59,99', 'R$ 100,222', 'R$230   ', 'r$ 200']

function limparNumeros(preco) {
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',', '.')
    preco = +preco.toFixed(2)
        return preco     
    }

let soma = 0
listaPrecos.forEach((preco) => {
    soma += limparNumeros(preco)
})

console.log(soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))
limparNumeros(listaPrecos[1])
