//Crie a const para a frase aqui

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"Boas vindas, mas não deixe o gato sair\""

console.log(frase)

const novaFrase = frase.replace("verde", "rosa")
console.log(novaFrase)
const fraseMudar = novaFrase.replace("azul", "laranja")
console.log(fraseMudar)

console.log("a frase possui a cor verde?", fraseMudar.includes("verde"))
console.log("a frase possui a cor laranja?", fraseMudar.includes("laranja"))

const fraseComParteMaiusculo = frase.replace("mas não deixe o gato sair", "mas não deixe o gato sair".toUpperCase())
console.log(fraseComParteMaiusculo)