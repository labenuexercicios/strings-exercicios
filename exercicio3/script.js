/* # Exercício 3

A partir da frase a seguir, faça o que se pede */

/* a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo); */
const phrase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
console.log(phrase)
//b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
let newPhrase = phrase.replaceAll("verde", "rosa");
newPhrase = newPhrase.replaceAll("azul", "laranja")
console.log(newPhrase)

//c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.
console.log("A nova frase inclui a palavra 'verde'?", newPhrase.includes("verde"));
console.log("A nova frase inclui a palavra 'laranja'?", newPhrase.includes("laranja"))

//**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”

newPhrase = newPhrase.replaceAll("\"BOAS VINDAS, mas não deixe o gato sair\"", "\"boas vindas, mas não deixe o gato sair\"".toUpperCase())
console.log(newPhrase)