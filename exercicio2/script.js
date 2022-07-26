const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaStringSemEspaco = minhaString.trim()
console.log(`Quantidade de caracteres da primeira string: ${minhaString.length} \nQuantidade de caracteres da segunda string: ${minhaStringSemEspaco.length}`)
const minhaStringNova = minhaString.replace('________', 'sticioso')
console.log(minhaStringNova)