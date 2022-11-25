/**Exercício 2

Observe a string abaixo.

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

A partir dela, execute os passos abaixo:

a) Remova o excesso de espaços no final da string;

b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

c) Substitua os traços ________ por “sticioso”. */



const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.";
//a) Remova o excesso de espaços no final da string;
console.log(minhaString.trim())

//b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da 
//remoção dos espaços;
console.log(minhaString.length);

//c) Substitua os traços ________ por “sticioso”. */
const novaFrase = minhaString.replace("_______","sticioso");
console.log(novaFrase)