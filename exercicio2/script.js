const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
let espaco = minhaString.trim()
console.log(`quantidade de caracteres com espaço ${minhaString.length}`)
console.log(`quantidade de caracteres sem espaço ${espaco.length}`)
console.log(minhaString.replace("________", "sticioso"))