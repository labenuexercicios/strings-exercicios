//Crie a const para a frase aqui

const frase = "Jorge tem uma casa verde e com portaão azul, com os dizeres: \"BOAS VINDAS, mas não deixa o gato sair\""

console.log(frase)

const fraseTrocada = frase.replace("verde", "rosa")
console.log(fraseTrocada)

const novaFrase = fraseTrocada.replace("azul", "laranja")
console.log(novaFrase)

console.log("possui a cor ver ?", novaFrase.includes("verde"))

console.log("Possui a cor laranja ?", novaFrase.includes("laranja"))