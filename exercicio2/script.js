const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(`Primeira frase: ${minhaString}`)

// PARTE 1
console.log(`Segunda frase: ${minhaString.trim()}`);

// PARTE 2
minhaString2 = minhaString.trim()
console.log(`Quantidade de caracteres na primeira frase ${minhaString.length}`);
console.log (`Quantidade de caracteres na segunda frase ${minhaString2.length}`)

// PARTE 3
let minhaString3 = minhaString2.replace("________" , "sticioso")
console.log(minhaString3)