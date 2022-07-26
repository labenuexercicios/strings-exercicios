//Crie a const para a frase aqui

// PASSO A

const frase1 = `Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair"\ `;
console.log(frase1);

// PASSO B

let frase2 = frase1.replace("verde", "rosa");
frase2 = frase1.replace("azul", "laranja");

// PASSO C

console.log(frase2);

// EXTRA

const contiFrase1= "mas não deixe o gato sair"
const contiFrase1Maiuscula = contiFrase1.toUpperCase();
console.log(frase1.replace(contiFrase1, contiFrase1Maiuscula));