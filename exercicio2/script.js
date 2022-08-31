const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//a) Remova o excesso de espaços no final da string;
const stringSemEspaco = minhaString.trim()
console.log(`String sem espaço ${stringSemEspaco}`)

//b) exiba, em um console.log() a quantidade de caracteres da string, 
//antes e depois da remoção dos espaços;
console.log(`Quantidade de caracteres: ${minhaString.length} 
\nQuantidade de caracteres sem espaço: ${stringSemEspaco.length}`)

//c) Substitua os traços ________ por “sticioso”.
const substituir = stringSemEspaco.replace('________', 'sticioso')
console.log(`Substituindo: ${substituir}`)
