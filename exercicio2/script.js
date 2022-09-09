const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.         ";
console.log(minhaString.length)
console.log(minhaString.trim().length)
const novaString = minhaString.replace(`________.`, `sticioso`)
console.log(novaString)
