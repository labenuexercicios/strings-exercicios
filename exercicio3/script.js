//Crie a const para a frase aqui

const frase = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'
console.log(frase);

const frase1 = frase.replaceAll("verde", "rosa");
const frase2 = frase1.replaceAll("azul", "laranja");
console.log(frase2);

const frase3 = frase2.replaceAll("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR");
console.log(frase3);

