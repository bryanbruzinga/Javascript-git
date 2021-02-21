const cep = fetch('https://viacep.com.br/ws/01001000/json')

cep.then(resolucao => resolucao.json())
.then(body => {
    const conteudo = document.querySelector('.conteudo')
    conteudo.innerText = body.logradouro   
})

//response.text() para arquivos de texto
//Json transforma em objeto
//status retorna mensagem
//tipos de requisição - basic é interno e cors é fora porém permitido

/*
Para puxar sites
const sobre = fetch('./sobre.html')

const div = document.createElement('div')

sobre.then(r => r.text())
.then(body => {
    div.innerHTML = body
}) 

para passar imagens

const imagem = fetch('./imagem.png')

imagem.then(r => r.blob())
.then(body => {
    const blobUrl = URL.createObjectURL(body)
    const imagemDom = document.querySelector('img')
    imagemDom.src = blobUrl
})



*/