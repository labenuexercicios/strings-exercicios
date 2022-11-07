//Crie a const para a frase aqui
/*# Exercício 3

A partir da frase a seguir, faça o que se pede*/


/*Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"*/


//a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

let frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log(frase)

//b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
let novaFrase = frase.replaceAll("verde","rosa" )
let novaFrase2 = novaFrase.replaceAll("azul","laranja")
console.log("frase nova:", novaFrase2)


//c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.
console.log("possui palavra verde na frase nova ?", novaFrase2.includes("verde"))
console.log("possui palavra laranja na frase nova ?", novaFrase2.includes("laranja"))

const pedaco =("mas não deixe o gato sair".toUpperCase())
const fraseMaiuscula = `Jorge tem uma casa verde e com portão azul, com os dizeres: \`BOAS VINDAS, ${pedaco}`
console.log(fraseMaiuscula)

//**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”*/