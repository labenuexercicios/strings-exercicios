// # Exercício 2

// Observe a string abaixo:

// ```jsx
//     const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// ```

// A partir dela, execute os passos abaixo:

// a) crie uma função que recebe **minhaString** por 
// parâmetro e **Remova** o excesso de espaços no final da string;

// b) A função deve imprimir no console a **quantidade de caracteres** 
// da string, *antes* e *depois* da remoção dos espaços;

// c) A função também deve **Substituir** os traços `________` pela 
//palavra “sticioso”.



function supersticioso ()
{
const frase = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const frase2 = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const fraseLimpa = frase.trim()
const sticioso = frase.replaceAll('________', '“sticioso”')
console.log (frase)
console.log (fraseLimpa)
console.log (frase.length)
console.log (sticioso)

}

supersticioso ()