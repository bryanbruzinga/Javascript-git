const lista = document.querySelector('.animais-lista')

console.log(lista.parentElement)

//Ex 1

const menu = document.querySelector('.menu')
const menuClone = menu.cloneNode(true)
const copy = document.querySelector('.copy')

copy.appendChild(menuClone)
console.log(copy)

//Ex 2 

const dt = document.querySelector('.faq-lista dt:first-child')

console.log(dt)

//Ex 3 
const dd = dt.nextElementSibling

console.log(dd)

//Ex 4

const faq = document.querySelector('.faq')
const animais = document.querySelector('.animais')

faq.innerHTML = animais.innerHTML