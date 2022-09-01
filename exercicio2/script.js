const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

let quantidade1 = minhaString.length

let quantidade2 = minhaString.trim().length

let novaString = minhaString.trim().replace("________" , "sticioso")

console.log(`Esta é minha frase a ser modificada = ${minhaString}\n
A quantidade de caracteres antes do trim é = ${quantidade1}\n
A quantidade de caracteres depois do trim é = ${quantidade2}\n
E assim ficaria minha novaString = ${novaString}`)
