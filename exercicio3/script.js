//Crie a const para a frase aqui
//A partir da frase a seguir, faça o que se pede
//Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
//Crie uma `const` no seu código para guardar a frase (com aspas e tudo);
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

//Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
let novaFrase = frase.replace("verde", "rosa").replace("azul", "laranja")

//Verifique se a nova string inclui **verde**, e se inclui **laranja**.
console.log(novaFrase)

//tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
let texto = "mas não deixe o gato sair"
let textoGrande = texto.toUpperCase()
let fraseFinal = frase.replace(texto, textoGrande)
console.log(fraseFinal)