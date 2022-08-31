const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log(minhaString)
console.log(`A string antes da remoção dos espaços tem ${minhaString.length} caracteres.`)
console.log( `A string depois de remover os espaços ficou com ${minhaString.trim().length} caracteres.`)
console.log(minhaString.replace("________.","sticioso"))