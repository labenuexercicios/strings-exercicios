const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log(minhaString)

//A)
const correcaoString = minhaString.trim()
console.log(correcaoString)

//B)
 quantCaracteresAntes = minhaString.length;
 quantCaracteresDepois = correcaoString.length

 console.log(`antes tinha ${quantCaracteresAntes} caracteres`)
 console.log(`após a correção tem ${quantCaracteresDepois} caracteres`)

 //C)
const novaMinhaString = minhaString.replace("________","sticioso")

console.log(novaMinhaString);
