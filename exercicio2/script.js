const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const minhaString2 = minhaString.trim()

console.log(minhaString)
console.log(`quantidade de caracteres antes da trim ${minhaString.length}`)
console.log(`quantidade de caracteres depois da trim ${minhaString2.length}`)
console.log(minhaString2.replace("________" , "sticioso"))