// # Exercício 3

// A partir da frase a seguir, faça o que se pede

// ```
// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
// ```

// a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);

// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

// c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.

// **EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”

// //Crie a const para a frase aqui

const casa = 'verde'
const portão = 'azul'
const dizeresDoPortão = 'BOAS VINDAS, mas não deixe o gato sair'
console.log('Jorge tem uma casa '+casa+' e com o portão'+portão+ ' com os dizeres: \'' +dizeresDoPortão+ '\'.')

// b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
const novaCorDaCasa =  casa.replace('rosa')
const novaCorDoPortão = portão.replace('laranja')

// c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.
const temVerde = casa.includes('verde')
console.log(`seu email possui verde: ${casa}`)

// tentar fazer o "mas não deixe o gato sair" ficar em maiúsculo, assim como boas vindas 




