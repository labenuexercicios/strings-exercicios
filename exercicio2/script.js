const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log(minhaString);
console.log(`A frase inicial tem ${minhaString.length} caracteres.`);

console.log(`A frase sem espaços desnecessários tem ${minhaString.trim().length} caracteres.`);

console.log(minhaString.replace("________", "sticioso"), `\nA nova frase tem ${minhaString.replace("________", "sticioso").trim().length} caracteres.`);