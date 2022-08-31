const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaString2 = "Eu não sou supersticioso, mas sou um pouco ________.";

//*a) Remova o excesso de espaços no final da string;
console.log(minhaString.trim("Eu não sou supersticioso, mas sou um pouco ________.      "))

//b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
console.log("Antes" , minhaString.length)
console.log("Depois" , minhaString2.length)

//c) Substitua os traços `________` por “sticioso”.
const substTraço = minhaString.replaceAll("________","sticioso")
console.log(substTraço)