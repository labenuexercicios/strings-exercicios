//Crie a const para a frase aqui

// PARTE 1
const frase1 = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair."'
console.log(frase1);

// PARTE 2
const frase2 = frase1.replace("verde" , "rosa");
const frase3 = frase2.replace("azul" , "laranja");

// PARTE 3
console.log(frase3)

// EXTRA
const frase4 = frase3.replace("mas não deixe o gato sair." , "MAS NÃO DEIXE O GATO SAIR.")
//const frase4 = frase3.toUpperCase('mas não deixe o gato sair.');
/* Usando o comando toUpperCase, a frase toda fica com letra maiúscula,
mesmo usando apenas a parte que quero trocar entre ()*/
console.log(frase4);