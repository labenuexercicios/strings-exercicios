//Crie a const para a frase aqui
// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"

const avisoGato = "BOAS VINDAS, mas não deixe o gato sair"
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: ${avisoGato.toUpperCase()} `
console.log(frase)

const novaFrase = frase.replace('verde','rosa')
.replace('azul', 'laranja')

console.log(frase.includes("verde"))
console.log(frase.includes("laranja"))



