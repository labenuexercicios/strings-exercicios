const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//Remova o excesso de espaços no final da string
let stringOrganizada = minhaString.trim()

//exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços
console.log("A primeira string tem " + minhaString.length + " caracteres e a segunda tem " + stringOrganizada.length)

//Substitua os traços `________` por “sticioso”
let subst = stringOrganizada.replace("________","sticioso")
console.log(subst)