// //# Exercício 3

// A partir da frase a seguir, faça o que se pede.

// ```
// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
// ```

// a) Crie uma `const` no seu código para **guardar a frase** (com aspas e tudo);

// b) Implemente uma função que recebe por parâmetro a `const` criada no passo **a)**  e imprima essa string trocando **verde** por **rosa**, e **azul** por **laranja**;

// c) **Verifique** se a nova string contém as palavras **verde** e **laranja**.

// **EXTRA:** tente fazer o trecho “mas não deixe o gato sair” ficar em **letras maiúsculas**, assim como o “BOAS VINDAS”

function casaDoJorge ()
{
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
const frase2 = frase.replaceAll ('verde', 'rosa').replaceAll ('azul' , 'laranja')
const frase3 = `mas não deixe o gato sair`
const frase4 = frase3.toUpperCase()
const fraseFinal = frase.replace(`mas não deixe o gato sair"`, frase4 )

console.log (frase)
console.log (frase2)
console.log (fraseFinal)

}

casaDoJorge()



