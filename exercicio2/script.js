const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const stringFinal = minhaString.replace("________","sticioso")

console.log (stringFinal)
console.log (`O número de caracteres com espaço é: ${stringFinal.length}`)
// o trim para remover espaços
console.log (`O número de caracteres sem espaço é: ${stringFinal.trim().length}`)
 