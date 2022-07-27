//Crie a const para a frase aqui

// a- criando a const

const minhaString = ('Jorge tem uma casa verde e com o portao azul, com os dizeres: "\BOAS VINDAS mas nao deixe o gato sair\"');
console.log(minhaString);

// b- trocando as cores

const newString = (minhaString.replace('verde', 'rosa').replace('azul', 'laranja'));
console.log(newString);

// c- verificando a veracidade

console.log(` A nova string contem verde? - ${newString.includes('verde')}\n A nova string contem laranja? - ${newString.includes('laranja')}`);

// extra - DEIXANDO EM maiusculo

console.log(newString.replace('mas nao deixe o gato sair', 'mas nao deixe o gato sair'.toUpperCase()));