//Crie a const para a frase aqui

const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair"\.'
const fraseNova = frase.replace("verde", "rosa").replace("azul", "laranja")

console.log(frase)
console.log(fraseNova)
// console.log(`Possui a cor verde e laranja? ${fraseNova.includes("verde") && fraseNova.includes("laranja")}`) //false

let possuiVerde = fraseNova.includes("verde")
let possuiLaranja = fraseNova.includes("laranja")
console.log("Possui a cor verde?", possuiVerde)
console.log("Possui a cor laranja?", possuiLaranja)

const fraseNova2 = "mas não deixe o gato sair"
console.log(`Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, ${fraseNova2.toUpperCase()}\"`)

