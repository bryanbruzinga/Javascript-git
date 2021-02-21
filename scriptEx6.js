//Retorne a soma total de caracteres dos parágrafos acima utilizando reduce
const paragrafo = document.querySelectorAll('p')

const totalCarac = Array.prototype.reduce.call(paragrafo, (acumulador, item) => {
    return acumulador + item.innerText.length
}, 0)

console.log(`Existem ${totalCarac} caracteres nessa página`)


//Crie uma função que retorne novos elementos html com os seguintes parâmetros: tag, classe e conteudo
function criarElemento(tag, classe, conteudo) {
    const elemento = document.createElement(tag)
    classe ? elemento.classList.add(classe) : null
    conteudo ? elemento.innerHTML = conteudo : null
    
    return elemento
}

console.log(criarElemento('li', 'azul', 'Esse é o conteúdo'))


//Crie uma nova função utilizando a anterior como base. Essa nova função deverá sempre criar h1 com a classe título. Porém o parâmetro conteúdo continuará dinânimco

const criarElementoh1 = criarElemento.bind(null, 'h1', 'titulo')

console.log(criarElementoh1('Oh o conteúdo ai'))
