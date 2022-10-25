const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: BOAS VINDAS, mas não deixe o gato sair`;

console.log (frase);

let novaFrase = frase.replace ("verde", "rosa").replace ("azul", "laranja"); //substitui apenas a primeira ocorrência. "replaceAll" substitui todas as ocorrências.
//novaFrase = novaFrase.replace ("azul","laranja");

console.log (novaFrase);

const palavras = novaFrase.split(" "); //tranformando a string em array (separados pelos espaços)

console.log (palavras); //Exibindo os atributos do array

console.log (palavras.length); //descobrindo o tamanho do array 

console.log (palavras[10]); //descobrindo qual palavra tem na posição 10

console.log (palavras.indexOf("mas")); // descobrindo qual a posição da atribuição "mas"



for (let posicao = palavras.indexOf("mas"); posicao< palavras.length; posicao++){
    palavras[posicao] = palavras[posicao].toUpperCase();
    
}

console.log (palavras.join(' ')); // transformando o array em string separando por espaços




/* a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS” */