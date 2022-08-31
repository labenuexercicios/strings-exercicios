const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: \'"BOAS VINDAS, mas não deixe o gato sair\'"`
//Crie a const para a frase aqui

const novaFrase = frase.replace("verde", "rosa").replace("azul", "laranja")
console.log(novaFrase)

console.log(novaFrase.includes("verde"))
console.log(novaFrase.includes("laranja"))

const novaFrase2 = `\'"BOAS VINDAS, mas não deixe o gato sair\'`
console.log(`Jorge tem uma casa verde e com portão azul, com os dizeres: ${novaFrase2.toUpperCase()}`)