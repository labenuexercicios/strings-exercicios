/* 
# Exercício 2

Observe a string abaixo.

```jsx
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
```
 */

const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.    ";

//a) Remova o excesso de espaços no final da string;
console.log(minhaString.length)

console.log(minhaString.trim())
const newString = minhaString.trim()

//b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
console.log(newString.length)

//c) Substitua os traços `________` por “sticioso”.
const novaString =  minhaString.replace("________","sticioso")

console.log(novaString)