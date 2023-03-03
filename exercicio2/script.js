const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//a) Remova o excesso de espaços no final da string;
const minhaStringEdit = minhaString.trim();

//b) Imprima no console a quantidade de caracteres da string, antes e depois da remoção dos espaços;
console.log(minhaString.length);
console.log(minhaStringEdit.length);

//c) Substitua os traços ________ por “sticioso”.
console.log(minhaStringEdit.replace('________', 'sticioso'));