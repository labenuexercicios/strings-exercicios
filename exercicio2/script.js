// a)
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
outraString = `${minhaString.trim()}`
// b)
console.log(`Antes : ${minhaString}${minhaString.length} caracteres`);
console.log( `Essa frase tem :${outraString} ${outraString.length} caracteres.`);
// c)
const novaString = minhaString.replace("________","sticioso")
console.log(novaString ,` \n Agora essa frase tem ${novaString.length} caracteres` );
