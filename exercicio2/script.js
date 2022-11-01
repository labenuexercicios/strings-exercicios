/* # Exercício 2

Observe a string abaixo. */


const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(minhaString)

/* 
A partir dela, execute os passos abaixo:

a) Remova o excesso de espaços no final da string; */
const minhaString2 = minhaString.trim()
console.log(minhaString2)

//b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
console.log("Tamanho da string da 'minhaString' é de:", minhaString.length , "caracteres");
console.log("Tamanho da string da 'minhaString2' é de:", minhaString2.length , "caracteres");

//c) Substitua os traços `________` por “sticioso”.
const newString = minhaString.replace("________", "sticioso");
console.log(newString)

