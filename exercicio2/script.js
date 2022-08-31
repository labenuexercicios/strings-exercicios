const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const substituir = minhaString.replace("________", "sticioso"); 
const alteracao = minhaString.trim();

console.log(alteracao);
console.log(substituir);
console.log(`Antes da alteração era `+ minhaString.length, `e depois da alteração ficou ` + alteracao.length + `.`);