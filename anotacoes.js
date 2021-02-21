/*
nextElementSibling = pega o elemento irmão
checkValididty() = Checa validade de um campo, no caso, se preenchido de acordo
setCustomValidity() = Põe uma mensagem no campo ao qual requer validação
'keyUp' quando a tecla é pressionada
.addEvevntListener('change', ()) = quando troca de campo
document.body.style = muda o estilo do site inteiro
.target.value recebe info do alvo

Forma de pegar todos os dados do form de uma vez

const dados = []

function random (event) {
    dados[event.target.name] = event.target.value
    name pode ser um nome qualquer
}

variavel.addEvevntListener('change', random)
*/