const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaNovaString = minhaString.trim();

console.log(`Tamanho inicial: ${minhaString.length}, Novo tamanho: ${minhaNovaString.length}`);
console.log(minhaNovaString.replace('________','sticioso'));