fetch('./dados.json')
.then(r => r.json())
.then(json => {
    json.forEach(aula =>
        console.log(aula.aula))
})

//localStorage.config = JSON.stringify(configuracoes)
//configuracoes é uma variavel
//config é uma nome de key ao localStorage

//https://pokeapi.co/api/v2/pokemon/1/

//https://jsonplaceholder.typicode.com/posts pra ter um json falso

/*
Uma maneira de fazer para mandar para o back-end*/

const  url = 'https://jsonplaceholder.typicode.com/posts'

const options = {
    method: 'POST',
    body: '{"title": "Javascript"}',
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    }
    //body só é usado para envio de algo
}
fetch(url, options)
.then(r => r.json())
.then(json => console.log(json))