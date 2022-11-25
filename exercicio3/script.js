//Crie a const para a frase aqui


//AQUI FOI MINHA TENTATIVA, QUE NÃO DEU CERTO 
/*const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: 'BOAS VINDAS, mas não deixe o gato sair'";

const novaString = frase.replace("verde", "rosa");
const novaString1 = frase.replace("azul", "laranja");

console.log(novaString);
console.log(novaString1);*/

///////////////////////////////////////////////////////////////////

//AQUI TAVA TENTANDO
/*const novaFrase = "Jorge tem uma casa verde e com portão azul, com os dizeres: 'BOAS VINDAS,";
const novaFrase1 = "mas não deixe o gato sair'";
const novaFrase1Resultado = novaFrase1.toUpperCase();
console.log(frase + " " + novaFrase1Resultado);*/

//////////////////////////////////////////////////////////////////


//AQUI É UM EXEMPLO DE SUBSTRING
/*let titulo = "StackOverflow";
let resultado = titulo.substring(0,13);
console.log(resultado)*/

///////////////////////////////////////////////////////////////////

//AQUI EU CONSEGUI DA FORMA CERTA

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: 'BOAS VINDAS, mas não deixe o gato sair'";
console.log(frase);

const novaString = frase.replaceAll("verde", "rosa").replaceAll("azul", "laranja");
console.log(novaString);

const novaFrase = novaString.substring(0,75);
console.log(novaFrase);

console.log(novaString.includes("verde"));
console.log(novaString.includes("laranja"));

const novaFrase1 = "mas não deixe o gato sair'";
const novaFraseResultado = novaFrase1.toUpperCase();
console.log(novaFrase + novaFraseResultado);

//////////////////////////////////////////////////////////////////
/*
//AQUI DIVIDI A FRASE EM 3 PEDAÇOS E PEGUEI OUTRAS PALAVRAS E APLIQUEI O .toUpperCase E TRANSFORMEI EM MAIÚSCULO
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: 'BOAS VINDAS, mas não deixe o gato sair'";
console.log(frase);

const novaString = frase.replaceAll("verde", "rosa").replaceAll("azul", "laranja");
console.log(novaString);

const novaFrase = novaString.substring(0,75 );
const novaFrase5 = novaString.substring(0,25);
const novaFrase6 = "Jorge tem uma casa rosa e";
const novaFrase7 = "com portão laranja,";
const novaFrase8 = novaFrase7.toUpperCase();
const novaFrase9 = " com os dizeres: 'BOAS VINDAS, MAS NÃO DEIXE O GATO SAIR'"
console.log(novaFrase5);
console.log(novaFrase6 + " " + novaFrase8 + novaFrase9)

*/
