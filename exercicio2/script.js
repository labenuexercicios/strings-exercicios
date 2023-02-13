const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "

//exercicio a
const minhaStringTrim = minhaString.trim()
console.log(minhaStringTrim)

//exercicio b
console.log("A quantidade de caracteres nessa frase antes de remover os espaços é:", minhaString.length)
console.log("A quantidade de caracteres nessa frase após remover os espaços é:", minhaStringTrim.length)

// exercicio c
const alteraMinhaString = minhaString.replace("________", "sticioso")
console.log(alteraMinhaString)