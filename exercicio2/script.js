// Exercício 2

let minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
let tamanhoString = minhaString.length
console.log(`O tamanho da string com espaços é: ${tamanhoString}`)
tamanhoString = minhaString.trim().length
console.log(`O tamanho da string sem espaços é: ${tamanhoString}`)
minhaString = minhaString.replace("________", "sticioso")
console.log(minhaString)