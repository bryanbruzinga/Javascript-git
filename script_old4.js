const distImg = document.querySelector('img')
const distancia = distImg.offsetTop

console.log(distancia)

//Soma dos Widths das imagens
function somaLarguraImg() {
    const distImg2 = document.querySelectorAll('img')
    let soma = 0

    distImg2.forEach((item) =>{
        soma += item.offsetWidth
    })
    console.log(soma)
}

window.onload = function() {
    somaLarguraImg()
}

//Checa se os links estão em medida 48x48
const links = document.querySelectorAll('a')

links.forEach((link) => {
    const linkWidth = link.offsetWidth
    const linkHeight = link.offsetHeight

    if(linkWidth >= 48 && linkHeight >= 48) {
        console.log(link, 'Possui acessibilidade')
    } else {
        console.log(link, 'não possui boa acessibilidade')
    }
})

console.log(links)

//Checa tamanho do browser
const browserSmall = window.matchMedia('(max-width: 720px)').matches

if(browserSmall) {
    const menu = document.querySelector('.menu')
    menu.classList.add('menu-mobile')
}

function callback(event) {
    console.log(event)
}

distImg.addEventListener('click', callback)