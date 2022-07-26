//Crie a const para a frase aqui
const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"';
let fraseAtt = frase.replaceAll("verde","rosa").replaceAll("azul","laranja")
console.log(fraseAtt.includes("verde"));
console.log(fraseAtt.includes("laranja"));

let stringArray = fraseAtt.split('"');

console.log(stringArray[0]+'"'+stringArray[1].toUpperCase() +'"');
