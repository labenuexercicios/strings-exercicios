//Crie a const para a frase aqui 
// A)
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
// B)
const novaFrase = `trocando ${frase.replace("verde","rosa").replace("azul","laranja")}`
// d)
console.log("----",frase,`\n---- ${novaFrase}`);
// c)
console.log(`tem verde na frase ?`, novaFrase.includes("verde"),`\ntem laranja na frase ?`, novaFrase.includes("laranja"));

console.log(`---- ${frase.replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR")}`);

