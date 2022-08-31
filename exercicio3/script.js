//Crie a const para a frase aqui

const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair"'
console.log (frase)

const frase2 = frase.replace("verde","rosa").replace("azul","laranja")

console.log (frase2)


const frase3 = "mas não deixe o gato sair".toUpperCase()
const frase4 = frase2.replace("mas não deixe o gato sair", frase3)
console.log (frase4)




