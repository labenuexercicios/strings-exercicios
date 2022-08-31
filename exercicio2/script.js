const minhaString =
  "Eu não sou supersticioso, mas sou um pouco ________.      ";

let novaString = minhaString.trim();

console.log(`Quantidade de caracteres iniciais: ${minhaString.length}
Quatidade de caracteres após a remoção de espaços: ${novaString.length}`);

let replace = novaString.replace("________", "sticioso");

console.log(novaString);
console.log(replace);
