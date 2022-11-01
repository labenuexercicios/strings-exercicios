//Crie a const para a frase aqui
//a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres:`
const fraseFinal = `\"BOAS VINDAS, mas não deixe o gato sair\"`

console.log(frase)
//b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
const frase2 = frase.replace(`verde`,`rosa`)
//c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.
const frase3 = frase2.replace(`azul`,`laranja`)

console.log(frase3)

const fraseFinalAlt = fraseFinal.toUpperCase()

//**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
console.log(frase3+fraseFinalAlt)
