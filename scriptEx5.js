// Selecione cada curso e retorne uma array com objetos contendo o título, descrição, aulas e horas de cada curso.
const cursos = document.querySelectorAll('.curso')
const arrayCursos = Array.from(cursos)


const items = arrayCursos.map((item) => {
    const titulo = item.querySelector('h1').innerText
    const desc = item.querySelector('p').innerText
    const aulas = item.querySelector('.aulas').innerText
    const horas = item.querySelector('.horas').innerText
    return {
        titulo,
        desc,
        aulas,
        horas
    }
})

console.log(items)

//Retorne uma lista com os números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33]

const filtrado = numeros.filter(item => item > 100)

console.log(filtrado)


//Verifique se Baixo faz parte da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']

const temBaixo = instrumentos.some(item => item === 'Baixo')

console.log(temBaixo)

//Retorne o valor total das compras

const compras = [
    {
        item: 'Banana',
        preco: 'R$ 4,99'
    },
    {
        item: 'Ovo',
        preco: 'R$ 2,99'
    },
    {
        item: 'Carne',
        preco: 'R$ 25,49'
    },
    {
        item: 'Refrigerante',
        preco: 'R$ 5,35'
    },
    {
        item: 'Queijo',
        preco: 'R$ 10,60'
    }
]
//Reduce precisa de um valor do acumulador senão, ele pula o primeiro item
const arrayCompras = compras.reduce((acumulador, item) => {
    
    const limpo = +item.preco.replace("R$ ", '').replace(',', '.')
    return acumulador + limpo
}, 0)

console.log(arrayCompras)

