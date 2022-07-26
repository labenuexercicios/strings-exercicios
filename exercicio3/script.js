//Crie a const para a frase aqui
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

const substituirVerde = frase.replace("verde", "rosa")
const substituirAzul = substituirVerde.replace("azul", "laranja")

console.log(substituirAzul.includes("verde"))
console.log(substituirAzul.includes("laranja"))

console.log(substituirAzul)

