//Crie a const para a frase aqui

// item A

const sentence = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
console.log(sentence)

// item B
const replacedSentence = sentence.replace('verde', 'rosa').replace('azul', 'laranja')
console.log(replacedSentence)

// item C
const incluiVerde = replacedSentence.includes('verde')

const incluiLaranja = replacedSentence.includes('laranja')

console.log(incluiVerde)
console.log(incluiLaranja)

// EXTRA
const upperCaseString = replacedSentence.replace('mas não deixe o gato sair', 'mas não deixe o gato sair'.toUpperCase())
console.log(upperCaseString)