// # Exercício 3

// A partir da frase a seguir, faça o que se pede

// ```
// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS,
//mas não deixe o gato sair"
// ```

// a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**,
//e **azul** por **laranja**;

// c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

// **EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo,
//assim como o “BOAS VINDAS”



//-----------------------------------------------------------------------------------



const frase1 = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

console.log(frase1)

const novaFrase1 = frase1.replace("verde" , "rosa")

console.log(novaFrase1)

const novaFrase2 = novaFrase1.replace("azul" , "laranja")

console.log(novaFrase2)

console.log(novaFrase2.includes("verde") , novaFrase2.includes("laranja"))

console.log(novaFrase2.replace("mas não deixe o gato sair" , "MAS NÃO DEIXE O GATO SAIR"))