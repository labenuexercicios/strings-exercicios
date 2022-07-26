//Crie a const para a frase aqui
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`;
const trocaString1 = `${frase.replaceAll("verde","rosa")}`
const trocaString2 = `${frase.replaceAll("azul","laranja")}`

console.log(trocaString1);
console.log(trocaString2);
console.log(trocaString2.includes("verde"));
console.log(trocaString2.includes("laranja"));
console.log(frase.replaceAll("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR"));
