//Crie a const para a frase aqui

const frase1 = (`Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`);{

const frase2 = frase1.replace("verde","rosa")
const frase3 = frase2.replace("azul","laranja")
const frase4 = frase3.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")

console.log(frase4)
}