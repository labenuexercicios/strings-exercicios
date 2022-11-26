//Crie a const para a frase aqui

// a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);
const fraseDoJorge = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"';

// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
const novaFraseDoJorge = fraseDoJorge.replace('verde','rosa');

// c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.
const novaFraseJorgePortao = novaFraseDoJorge.replace('azul','laranja');

// **EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
const NovaFraseJorgeUpperCase = novaFraseJorgePortao.toUpperCase('mas não deixe o gato sair')

console.log(NovaFraseJorgeUpperCase)
