
// # Exercício 2

// Observe a string abaixo.

// ```jsx
// const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
// ```

// A partir dela, execute os passos abaixo:

// a) Remova o excesso de espaços no final da string;

const removerEspaco = (minhaString) => {
    minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "
    console.log(minhaString.trim())
}
removerEspaco()

// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
const caracteresCounter = (minhaString) => {
    minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "
    let caracteresAntes = minhaString.length
    let caracteresDepois = (minhaString.trim()).length
    console.log(`Número de caracteres antes: ${caracteresAntes}\nNúmero de caracteres depois: ${caracteresDepois}
    `)
}
caracteresCounter()


// c) Substitua os traços `________` por “sticioso”.

const substituicao = (frase, termoAsubstituir, substituto) => {
    frase = "Eu não sou supersticioso, mas sou um pouco ________."
    termoAsubstituir = "________."
    substituto = "ticioso."
    const novaFrase = frase.replace(termoAsubstituir, substituto)
    console.log(novaFrase)
}
substituicao()
