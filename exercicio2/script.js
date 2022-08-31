// O exercicio pede para remover os espaços da string

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";//

//Aqui podemos remover os espaços da strings, informando a ele como ir e voltar ao terminar.
// minhaString.length comprimento.
console.log("Antes e depois" , minhaString.length, minhaString.trim().length)

// Nessa parte retiramos espaço em falta por "sticioso", usando o medor replace
console.log(minhaString.trim().replace("________","sticioso"))