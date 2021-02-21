/*const img = document.querySelector('img')

function callback(event) {
    console.log(event)
}

img.addEventListener('click', callback)

const imgs = document.querySelectorAll('img')

function handleImg(event) {
    console.log(event.target.getAttribute('src'))
}

imgs.forEach((img) => {
    img.addEventListener('click', handleImg)
})*/

//Ex 1
const links = document.querySelectorAll('a[href^="#"')

function addClass(event){
    event.preventDefault()
    links.forEach((link) => {
        link.classList.remove('ativo')
    })
    this.classList.add('ativo')
}

links.forEach((link) => {
    link.addEventListener('click', addClass)
})

//Ex 2 

const todos1 = document.querySelectorAll('body *')

function handleElemento(event) {
    console.log(event.currentTarget)
}

todos1.forEach((event) => {
    event.addEventListener('click', handleElemento)
})


//Ex 3 

const todos = document.querySelectorAll('body *')

function handleElemento(event) {
    this.remove(event.currentTarget)
}

todos.forEach((event) => {
    event.addEventListener('click', handleElemento)
})

// Ex 4 

window.document.addEventListener('keydown', keyPressed)

function keyPressed(event) {
    if(event.key === 't') {
        document.documentElement.classList.toggle('textomaior')
    }
}