//Crie a const para a frase aqui

const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

console.log(frase)

const fraseNova = frase.replace('verde', 'rosa').replace('azul', 'laranja')

console.log(fraseNova)

const verde = fraseNova.includes('verde')

console.log(verde)

const laranja = fraseNova.includes('laranja')

console.log(laranja)

console.log(fraseNova.replace('mas não deixe o gato sair', 'MAS NÃO DEIXE O GATO SAIR'))