const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const novaFrase = minhaString.trim()

console.log("Frase sem o excesso de espaços no final: ", novaFrase)
console.log("Quantidade de caracteres da primeira frase: ", minhaString.length)
console.log("Quantidade de caracteres ca segunda frase: ", novaFrase.length)

const novaFrase2 = minhaString.replace("________", "sticioso")
console.log(novaFrase2)
