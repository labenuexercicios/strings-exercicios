//# Exercício 2

//Observe a string abaixo.

//```jsx
var minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
//```

//A partir dela, execute os passos abaixo:

//a) Remova o excesso de espaços no final da string;

var minhastring2 = minhaString.slice(0, -16)

//b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

console.log(minhaString.length)
console.log(minhastring2.length)



//c) Substitua os traços `________` por “sticioso”.

var minhastring2 = minhaString.replace('________.','sticioso.')
console.log(minhastring2)
