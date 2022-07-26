const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const semEspaco = minhaString.trim()

console.log(minhaString.length)
console.log(minhaString.trim())
console.log(semEspaco) /*Não precisa imprimir o tim de novo, apenas a variavel)*/
console.log(semEspaco.length)
console.log(minhaString.replaceAll("________","sticioso"))

//OU

const novaSting = minhaString.replaceAll("________","sticioso")
console.log(novaSting)

/*const minhaString = "Eu não sou supersticioso, mas sou um pouco __.      ";
//a) Remova o excesso de espaços no final da string;
const trimString = minhaString.trim();
console.log(trimString);
//exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
console.log(minhaString.length)
console.log(trimString.length)*/
