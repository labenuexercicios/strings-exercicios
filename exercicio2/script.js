// exercicio 2 removendo espaços e imprimindo

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(minhaString)
console.log(`Quantos caracteres tem a string? \n${minhaString.length}`)

//removendo espaços

semEspaco = minhaString.trim()
console.log(`Removendo os espaços, fica com quantos caracteres? \n${semEspaco.length}`)

//substituindo os ___
console.log(`Substituindo os __: \n${minhaString.replaceAll("________", "sticioso")}`)