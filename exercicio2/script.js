

// # Exercício 2

// Observe a string abaixo.
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const edicaoNova = minhaString.trim()
let substitui = edicaoNova.replace("________" , "sticioso")


console.log(`Antes eu era ${edicaoNova.length}\nE agora eu sou ${minhaString.length}`)
console.log(substitui)


// console.log(minhaString.trim() (minhaString.length))

// A partir dela, execute os passos abaixo:

// a) Remova o excesso de espaços no final da string;

// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

// c) Substitua os traços `________` por “sticioso”.