//a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
//b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
const fraseRepOne = frase.replace("verde", "rosa").replace("azul", "laranja")
//c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.
const temVerde = fraseRepOne.includes("verde")
const temLaranja = fraseRepOne.includes("laranja")




console.log(`
${frase}
${fraseRepOne}
${temLaranja}
${temVerde}
`)