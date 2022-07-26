const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log (`A frase ${minhaString} possui ${minhaString.length} caracteres.`);
console.log (`Se removermos os espaços em branco da frase ela terá ${minhaString.trim().length} caracteres`);
const minhaNovaString = minhaString.replaceAll ("________","sticioso");
console.log (minhaNovaString);