const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const novaFrase = minhaString.replace("________", "sticioso")

minhaStringNova = minhaString.trim()
console.log(minhaStringNova)
console.log(`Quantidade de caracteres: \nAntes = ${minhaString.length} \nDepois = ${minhaStringNova.length}`)
console.log(novaFrase)
