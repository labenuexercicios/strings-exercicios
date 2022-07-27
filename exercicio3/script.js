//Crie a const para a frase aqui
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
const novaFrase = frase.replaceAll("verde", "rosa")
const novaFrase2 = novaFrase.replaceAll("azul", "laranja")

console.log(frase)
console.log(novaFrase2)
console.log(novaFrase2.includes("verde"))
console.log(novaFrase2.includes("laranja"))

console.log(novaFrase2.replace(" mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR"))