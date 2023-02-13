const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'

const alteraVerde = frase.replace("verde", "rosa")
const alteraVerdeEAzul = alteraVerde.replace("azul", "laranja")
console.log(alteraVerdeEAzul)

const verificaVerde = alteraVerdeEAzul.includes("verde")
const verificaLaranja = alteraVerdeEAzul.includes("laranja")
console.log(`A nova string inclui verde? ${verificaVerde}
A nova string inclui laranja? ${verificaLaranja}`)

const fraseToUpperCase = "mas não deixe o gato sair".toUpperCase()

console.log(fraseToUpperCase)