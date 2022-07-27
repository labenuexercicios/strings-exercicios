const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const stringSemEspaço = minhaString.trim()

console.log("A string com espaços possui", minhaString.length, "caracteres e a string sem espaços possui", stringSemEspaço.length, "caracteres ");

const novaString = stringSemEspaço.replace("________", "sticioso");
console.log(novaString);
