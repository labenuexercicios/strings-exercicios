//Crie a const para a frase aqui
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`;
const novaFrase = frase.replace("verde","rosa").replace('azul','laranja');
const parte = 'mas não deixe o gato sair';
console.log(novaFrase);
console.log(`Tem verde? ${novaFrase.includes('verde')}`);
console.log(`Tem laranja? ${novaFrase.includes('laranja')}`);
console.log(novaFrase.replace(parte,parte.toLocaleUpperCase()));
