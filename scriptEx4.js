//Remova o primeiro valor e coloque em uma variável
//Remova o último valor e coloque numa variável
//Adicione 'Arroz' ao final
//Adicione 'Peixe' e 'Batata' ao início da array
const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão']

const primeiroRemovido = comidas.shift()
console.log(primeiroRemovido)

const ultimoRemovido = comidas.pop()
console.log(ultimoRemovido)

comidas.push('Arroz')
console.log(comidas)

comidas.unshift('Peixe', 'Batata')
console.log(comidas)


//Arruma em ordem alfabética
//Inverta a ordem
//Verifique se Joana faz parte
//Verifique se Juliana faz parte
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia']

console.log(estudantes.sort())
console.log(estudantes.reverse())
console.log(estudantes.includes('Joana'))
console.log(estudantes.includes('Juliana'))

//Substitua section por ul e div por li com split e join
let html = `<section>
                <div>Sobre</div>
                <div>Produtos</div>
                <div>Contatos</div>
            </section>
`
let htmlCortado = html.split('section').join('ul').split('div').join('li')
console.log(htmlCortado)

//Remova o último carro, mas salve a array original em uma variável
const carros = ['Ford', 'Fiat', 'VW', 'Honda']

const carrosCopia = carros.slice()
console.log(carrosCopia)

carros.pop()
console.log(carros)