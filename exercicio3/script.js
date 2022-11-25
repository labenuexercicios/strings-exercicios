/**Exercício 3

A partir da frase a seguir, faça o que se pede

Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"

a) Crie uma const no seu código para guardar a frase (com aspas e tudo);

b) Crie uma nova string a partir da primeira, trocando verde por rosa, e azul por laranja;

c) Verifique se a nova string inclui verde, e se inclui laranja.

EXTRA: tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS” */

//a) Crie uma const no seu código para guardar a frase (com aspas e tudo);

const guardarFrase = "\"BOAS VINDAS, mas não deixe o gato sair\""
console.log(guardarFrase)

//b) Crie uma nova string a partir da primeira, trocando verde por rosa, e azul por laranja;
const frase = "seus tênis verdes combinam com minha jaqueta azul";
const novaFrase = frase.replace("verde", "rosa")
const novaFrase2 = frase.replace("azul", "laranja")

console.log(novaFrase)
console.log(novaFrase2)


//c) Verifique se a nova string inclui verde, e se inclui laranja.
const fraseIncludes = "seus tênis verdes combinam com minha jaqueta azul";
console.log(fraseIncludes.includes("verde"))
console.log(fraseIncludes.includes("laranja"))

//EXTRA: tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”

const fraseMaior = "BOAS VINDAS";
const fraseToLowerCase = fraseMaior.toLowerCase();
console.log(fraseToLowerCase);

const fraseMenor = "mas não deixe o gato sair";
const fraseToUpperCase = fraseMenor.toUpperCase();
console.log(fraseToUpperCase)