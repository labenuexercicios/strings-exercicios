//Crie a const para a frase aqui
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS,mas não deixe o gato sair\""

console.log(frase)

const fraseTrocada = frase.replace("verde", "rosa") 
console.log(fraseTrocada)
const novaFrase = fraseTrocada.replace("azul", "laranja")
console.log(novaFrase)

console.log("possui a cor verde?",novaFrase.includes("verde"))
console.log("possui a cor laranja? ",novaFrase.includes("laranja"))

const fraseToUpper = "mas não deixe o gato sair"
console.log(frase.replace(fraseToUpper, fraseToUpper.toUpperCase()))