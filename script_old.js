const imagens = document.getElementsByTagName("img")
console.log(imagens)

const img2 = document.querySelectorAll('img[src^="img/imagem"]')
console.log(img2)

const hash = document.querySelectorAll('a[href^="#"]')
console.log(hash)

const subTitulo = document.querySelector('.animais-descricao h2')
console.log(subTitulo)

const ultimoP = document.getElementsByTagName('p')
console.log(ultimoP[ultimoP.length-1])

hash.forEach((item) => console.log(item))