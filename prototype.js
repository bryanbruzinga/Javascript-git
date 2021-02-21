//Prototype é sempre ligado a função

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
}

//Fica acessivel pelo objeto através de proto
Pessoa.prototype.andar = function () {
    return this.nome + ' Pessoa andou'
}

const bryan = new Pessoa('Bryan', 30)

// outra maneira de converter nodeList para array

//Array.prototype.slice.call(lista)
//Array.from(lista)


//Ex 1 Criar construtor que retorne nome completo por função no prototype
function Pessoas(nome, sobrenome, idade) {
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
}

Pessoas.prototype.nomeCompleto = function () {
    return `${this.nome} ${this.sobrenome}`
}

const alguem = new Pessoas('Bryan da Silva', 'Bruzinga', 30)

//Ex 2 listar os metodos através do prototype
/*
NodeList - entries, forEach, item, keys, length, values
HTMLCollection - item, length, namedItem
Document - Uma renca */

//Ex 3
const li = document.querySelector('li')
/*
li
li.click
li.innerText
li.value
li.hidden
li.offsetLeft
li.click()

//Ex 4

li.hidden.contructor.name*/