const menu = document.querySelectorAll('.menu a')

menu.forEach((item) =>{
    item.classList.add('ativo')
})

console.log(menu)

menu.forEach((item) =>{
    item.classList.add('ativo')
})

menu[0].classList.add('ativo')

console.log(menu)


let imgs = document.querySelectorAll('img')
imgs.forEach((item) =>{
    console.log(item, item.hasAttribute('alt'))
})


const ultimo = document.querySelector('a[href^="http"]')

ultimo.setAttribute('href', 'http://www.google.com.br')

