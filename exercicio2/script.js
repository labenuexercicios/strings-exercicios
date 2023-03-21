const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
var semespac = minhaString.trim()
var subtit = semespac.replaceAll("________", "sticioso")
console.log(subtit)
console.log(`A primeira frase tem ${minhaString.length} caracteres e 
a segunda frase tem ${semespac.length} caracteres.`)