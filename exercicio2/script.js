

    
    

    function stringsQtdReplace (){
        const minhaString = 'Eu não sou supersticioso, mas sou um pouco ________   .      ';
        const contagem1 = minhaString.length;
        const substirui = minhaString.replace("________","sticioso");
        const removeSpace = substirui.trim();
        const contagem2 = removeSpace.length

        console.log(`String original "${minhaString}"`);
        console.log(`Primeira contagem de carateres da string foi ${contagem1}`);
        console.log(`Substituindo "${removeSpace}"`);
        console.log(`Segunda contagem foi de ${contagem2}`)
        

        
    }

    stringsQtdReplace()

/* # Exercício 2

Observe a string abaixo:

```jsx
    const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
```

A partir dela, execute os passos abaixo:

a) crie uma função que recebe **minhaString** por parâmetro e **Remova** o excesso de espaços no final da string;

b) A função deve imprimir no console a **quantidade de caracteres** da string, *antes* e *depois* da remoção dos espaços;

c) A função também deve **Substituir** os traços `________` pela palavra “sticioso”. */
