const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const aux = minhaString.trim();
const siticioso = aux.replace("________","siticioso")

console.log(minhaString,`Quantidade de caracteres CONTANDO os espaços:`, minhaString.length) 


console.log(aux,`\n`, `Quantidade de caracteres SEM contar os espaços:`, aux.length)

console.log(`Substituindo os traços:`,`\n`,siticioso)