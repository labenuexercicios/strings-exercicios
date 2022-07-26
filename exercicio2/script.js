const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const semEspaco = minhaString.trim();

console.log(`A frase tem ${minhaString.length} caracteres, após remover os espaços fica ${semEspaco.length}`);

console.log(`${minhaString.replace("________", "sticioso")}`);