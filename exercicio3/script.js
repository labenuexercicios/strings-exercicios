//Crie a const para a frase aqui

// Frase Principal
const frase1 = `Jorge tem uma casa verde e com portão azul, com os dizeres: ${"BOAS VINDAS, mas não deixe o gato sair.".toUpperCase()}`

// Replace das cores da frase
const frase2 = frase1.replace('verde', 'rosa'); 
const frase3 = frase2.replace ("azul", "laranja");

// Verificação de cor na frase
console.log(`Possui a palavra \"verde\"? ${frase3.includes("verde")} \nPossui a palavra \"laranja\"? ${frase3.includes("laranja")}`);

// toUpperCase na frase 
// console.log(frase3.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR"));
console.log(frase3);