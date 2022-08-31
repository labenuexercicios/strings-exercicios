const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log(frase.toLocaleUpperCase('verde'))

const fraseMaiuscula = "mas não deixe o gato sair".toUpperCase();

const novaFrase = frase.replaceAll('verde','rosa')
const novaFrase2 = novaFrase.replaceAll('azul','laranja')
console.log(novaFrase2.replaceAll("mas não deixe o gato sair", fraseMaiuscula))