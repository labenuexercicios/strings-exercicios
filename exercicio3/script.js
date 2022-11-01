//Crie a const para a frase aqui

const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
console.log(frase)

//b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

const trocaPalavra = frase.replace("verde", "rosa").replace("azul", "laranja")
console.log(trocaPalavra)


//c) Verifique se a nova string inclui **verde**, e se inclui **laranja**

console.log(trocaPalavra.includes("laranja"))
console.log(trocaPalavra.includes("verde"))

//tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”

const fraseToUpper = "mas não deixe o gato sair"
console.log(frase.replace(fraseToUpper, fraseToUpper.toUpperCase()))
