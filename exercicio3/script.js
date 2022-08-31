//Crie a const para a frase aqui
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
const novastring = frase.replace("verde","rosa").replace("azul","laranja")

console.log(`primeira frase: ${frase}`)
console.log(`segunda frase: ${novastring}`)

const extra = "mas não deixa o gato sair".toUpperCase()
const extrafinal = frase.replace(`mas não deixa o gato sair `,`${extra}`)
console.log(extrafinal)
