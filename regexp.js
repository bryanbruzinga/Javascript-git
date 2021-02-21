//const regexp = /\w+/gi;

//Construtor do regexp
//const regexp1 = new RegExp('\\w+', 'gi')
//const regexp = /\w+/g;
const frase = 'Javascript, TypeScript, CoffeeScript, Java';

//console.log(frase.replace(regexp, 'X'))

//console.log(regexp.test(frase));
//console.log(regexp.exec(frase));

/*let regexpResult;
while ((regexpResult = regexp.exec(frase)) !==null) {
    console.log(regexpResult[0])
}*/

const regexp = /[a-z]/gi;

//const resultados = frase.match(regexp)
const resultados = frase.split(regexp)

console.log(resultados)

//positive lookbehind para tag /(?<=<\/?)\w+/g
//Referencia a captura $&