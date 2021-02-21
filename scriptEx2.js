/* Utilizando o foreach na array abaixo, some os valores de Taxa e os valores de Recebimento*/

const transacoes = [
    {
        descricao: 'Taxa do Pão',
        valor: 'R$ 39',
    },
    {
        descricao: 'Taxa do Mercado',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento do Cliente',
        valor: 'R$ 99',
    },
    {
        descricao: 'Taxa do Banco',
        valor: 'R$ 129',
    },
    {
        descricao: 'Recebimento do Cliente',
        valor: 'R$ 49',
    },
]

let valorTotal = 0
let valorRecebimentoTotal = 0

// + antes de número String volta como Number
transacoes.forEach((item) => {
    const numeroLimpo = +item.valor.replace('R$ ', '')

    if(item.descricao.slice(0, 4) === 'Taxa'){   
                
        valorTotal = valorTotal + numeroLimpo
        
    }let valorRecebimento = +item.valor.replace('R$ ', '')
    if (item.descricao.slice(0, 5) === 'Receb'){
                
        valorRecebimentoTotal = valorRecebimentoTotal + valorRecebimento        
    }    
})
console.log(`Valor total das Taxas é R$ ${valorTotal}`)
console.log(`O valor total do Recebimento é R$ ${valorRecebimentoTotal}`)


//Retorne uma array com a lista abaixo

const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta'


const lista = transportes.split(';')
console.log(lista)



//Substitua todos os span's por a's

const html = `<ul>
                    <li><span>Sobre</span></li>
                    <li><span>Produtos</span></li>
                    <li><span>Contato</span></li>
                </ul>
`
const htmlReplace = html.split('span').join('a')
console.log(htmlReplace)


//Retorne o último caracter da frase

const frase = 'Melhor do ano!'

console.log(frase.slice(-1))


// Retorne o total de taxas

const transacoes2 = [
    'Taxa do Banco',
     '    TAXA DO PÃO',
      '    taxa do mercado',
       'depósito Bancário',
        'TARIFA especial'
    ]
let taxas = 0
transacoes2.forEach((item) => {
    item = item.toLowerCase().trim().slice(0,4)
    if(item === ('taxa'))
    taxas ++
})
console.log(taxas)