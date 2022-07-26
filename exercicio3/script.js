//Crie a const para a frase aqui
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`;
const trocaString1 = `${frase.replaceAll("verde","rosa").replaceAll("azul","laranja").replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR")}`//replace em cima de replace, funciona com toUpperCase etc...

console.log(frase);// original
console.log(trocaString1);//modificado

