/*Crie a const para a frase aqui
A partir da frase a seguir, faça o que se pede

```
Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
```

a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS” */


const frase = ("Jorge tem uma casa verde e com portão azul, com os dizeres: ")
const bVindas = ("\"BOAS VINDAS, mas não deixe o gato sair\"")

const novaFrase = frase.replace("azul" , "laranja").replace("verde" , "rosa")

const novaBVindas1ToUpperCase = bVindas.toUpperCase()

console.log(novaFrase + novaBVindas1ToUpperCase)

/*

let fraseExtra = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"';

let fraseExtra2 = fraseExtra.replace('mas não deixe o gato sair', fraseExtra.substring(78, 103).toUpperCase());
console.log(fraseExtra2);
*/