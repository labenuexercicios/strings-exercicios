const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaStringSemEspacao = minhaString.trim();
const minhaStringMinuscula = minhaString.toLocaleLowerCase();
let trocandoLetras = minhaStringMinuscula.replace("________","sticioso");

console.log("minhaString com espaços: "+minhaString.length);
console.log("Minha string sem espaços: "+minhaStringSemEspacao.length)
console.log(trocandoLetras);
