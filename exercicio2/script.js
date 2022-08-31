const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// A partir dela, execute os passos abaixo:

// a) Remova o excesso de espaços no final da string;
const novaFrase = (minhaString.trim())
console.log(minhaString.trim())

// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

console.log("Quantidade de caracteres com o espaço: " + minhaString.length)
console.log("Quantidade de carecteres sem o espaço: " + novaFrase.length)

// c) Substitua os traços ________ por “sticioso”.

const novaString = minhaString.replace(`________` , "sticioso")
console.log(novaString)
