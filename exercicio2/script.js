const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

/* a) Remova o excesso de espaços no final da string;

b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

c) Substitua os traços `________` por “sticioso”. */

let novaString = minhaString.trim()
console.log(minhaString)
console.log(minhaString.length)
console.log(novaString.length)
novaString = novaString.replace("________","sticioso")
console.log(novaString)

