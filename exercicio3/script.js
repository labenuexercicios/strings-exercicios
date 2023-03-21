
//A)
const text = 'Jorge tem uma casa verde e com portão azul, com os dizeres:' +
'"BOAS VINDAS, mas não deixe o gato sair"'


//B)CRIE UMA NOVA STRING SUBSTITUINDO VERDE E AZUL
let replacedText = text.replace("verde", "rosa").replace ("azul","laranja")

//C)
console.log(replacedText)

//EXTRA - COLOQUE EM UPPER CASE O TEXTO EM ASPAS: 
//VERSÃO SIMPLES
const partialTextToUpper = replacedText.replace ("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")
console.log (partialTextToUpper)

//VERSÃO COMPLEXA USANDO MAIS METHODS
const sliceIndex = replacedText.indexOf("mas")

let stringEnd= replacedText.slice(sliceIndex)
stringEnd = stringEnd.toUpperCase()

let stringStart = replacedText.substring(0,sliceIndex)

const stringFinal = stringStart + stringEnd;
console.log(stringFinal)