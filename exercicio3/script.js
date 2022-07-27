//Crie a const para a frase aqui

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

const novaFrase = frase.replace("verde","rosa")
console.log(novaFrase)
const fraseFinal = novaFrase.replace("azul","laranja")
console.log(fraseFinal)

console.log(fraseFinal.includes("verde"))
console.log(fraseFinal.includes("laranja"))

/*const parte1 = "Jorge tem uma casa rosa e com portão laranja, com os dizeres:"
const parte2 = "\"BOAS VINDAS, mas não deixe o gato sair\""
console.log(parte1, parte2.toUpperCase())*/

//-------------------------------------------------

//OU

let fraseFinal2 = fraseFinal.replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR.")
console.log(fraseFinal2)

//OU

console.log(fraseFinal.replace("mas não deixe o gato sair", `${"mas não deixe o gato sair".toUpperCase()}`))
