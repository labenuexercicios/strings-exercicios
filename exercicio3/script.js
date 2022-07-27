const frase = "Jorge tem uma casa verde com o portão azul,com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

const novaFrase = frase.replaceAll("verde", "rosa").replaceAll("azul", "laranja")
console.log(novaFrase)

console.log(novaFrase.includes("verde"))
console.log(novaFrase.includes("laranja"))

const frase1 = "Jorge tem uma casa verde com o portão azul,com os dizeres: \"BOAS VINDAS,"
const frase2 = " mas não deixe o gato sair\""
console.log(frase2.toUpperCase())
console.log(frase1 + frase2.toUpperCase())

