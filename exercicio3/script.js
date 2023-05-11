//Crie a const para a frase aqui

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres:\"BOAS VINDAS, mas não deixe o gato sair\""
const primeiraParte = "Jorge tem uma casa verde e com portão azul, com os dizeres:"
const segundaParte =  "\"BOAS VINDAS, mas não deixe o gato sair\""
const novaFrase = frase.replace ("verde", "rosa").replace("azul" , "laranja")
let novaFrase2 = primeiraParte + segundaParte.toUpperCase()


console.log(novaFrase)
console.log(novaFrase.includes("verde", "azul"))
console.log (novaFrase2)
