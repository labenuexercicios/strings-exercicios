const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

/*
# Exercício 2

Observe a string abaixo:

```jsx
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
```

A partir dela, execute os passos abaixo:

a) **Remova** o excesso de espaços no final da string;

b) Imprima no console a **quantidade de caracteres** da string, *antes* e *depois* da remoção dos espaços;

c) **Substitua** os traços `________` por “sticioso”.
*/

// a)
const tamanhoMinhaString =('A quantindade de caracteres inicial da string é de: ' + minhaString.length )
console.log(tamanhoMinhaString)

//b)
function removerEspaços(frase){
    const espacosRemovidos = frase.trim()
    const imprimeTamanho =`A quantidade de caracteres após remover espaços é de: ${espacosRemovidos.length}`

    console.log(imprimeTamanho)
}

removerEspaços(minhaString)

//c)
function substituirUnderline(frase){
    const espacosRemovidos = frase.trim()
    const substituindoUnderline = espacosRemovidos.replaceAll('________', 'sticioso')
    const imprimeNovaFrase = `Removendo espaços e substituindo anderline:${substituindoUnderline}`

    console.log(imprimeNovaFrase)
}

substituirUnderline(minhaString)