//Observe a string abaixo.

//const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
//A partir dela, execute os passos abaixo:

//a) Remova o excesso de espaços no final da string;

//b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

//c) Substitua os traços ________ por “sticioso”.





const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";


console.log(minhaString.trim())
console.log(minhaString.length)


const novaString = minhaString.replace(" ________.      ", "sticioso")
console.log(novaString)
console.log(novaString.length)












