//extraia o backgroundColor, color e margin do btn
const btn = document.querySelector('button')
const btnStyles = getComputedStyle(btn)
const {backgroundColor, color, margin} = btnStyles

console.log(backgroundColor, color, margin)


//Troque os valores das variáveis abaixo
let cursoAtivo = 'Javascript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo]


console.log(cursoAtivo)
console.log(cursoInativo)

//Corrija o erro abaixo

const cachorro = {
    nome: 'Bob',
    raca: 'Labrador',
    cor: 'Amarelo'
}

const {cor: bobCor} = cachorro
const {nome, cor} = cachorro;
console.log (nome, cor);