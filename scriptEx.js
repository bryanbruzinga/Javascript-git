/*const Dom = {
    seletor: 'li',
    element() {
        return document.querySelector(this.seletor)
    },
    ativo() {
        this.element().classList.add('ativo')
    },
}

Dom.ativo()
Dom.seletor = 'ul'
Dom.ativo()*/

//Função construtora

function dom(seletor) {
    this.element = function() {
        return document.querySelector(seletor)
    }
    this.ativo = function() {
        this.element().classList.add('ativo')
    }
}

const li = new dom('li')


//Ex 1 Tranformar objeto em Constructor Function
/*
Const pessoa = {
    nome: 'Nome pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + 'andou')
    }
}*/

function pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
    this.andar = function () {
        console.log(this.nome + ' andou')
    }
}

//Ex 2 Crie 3 pessoas

const joao = new pessoa('João', 20)
const maria = new pessoa('Maria', 25)
const bruno = new pessoa('Bruno', 15)


//Ex 3 Crie uma Constructor Function para manipular listas de elementos do Dom

function Dom2(lista) {
    this.elements = document.querySelectorAll(lista)

    this.addClass = function(classe) {
        this.elements.forEach((item)=>{
           item.classList.add(classe)
        })
    }
    this.removeClass = function(classe) {
        this.elements.forEach((item)=>{
            item.classList.remove(classe)
        })
    }
}

const lista = new Dom2('li')