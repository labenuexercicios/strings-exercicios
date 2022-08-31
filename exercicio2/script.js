
// a) Remova o excesso de espaços no final da string;

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "

const trims = (minhaString.trim())
console.log (trims)


// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

let tamanho = trims.length
console.log (`a frase ${minhaString} possuía ${minhaString.length} caracteres. Agora possui ${tamanho}.`)


// c) Substitua os traços `________` por “sticioso”.

console.log (trims.replace("________","sticioso"))