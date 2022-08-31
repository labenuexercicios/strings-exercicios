//Crie a const para a frase aqui 
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`

const novaFrase = frase.replace("verde","rosa").replace("azul","laranja").replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")
 
const verificarVerde = novaFrase.includes("verde")
const verificarLaranja = novaFrase.includes("laranja")
 
console.log (`${novaFrase} \nA string inclui verde: ${verificarVerde}\nA string inclui Laranja: ${verificarLaranja}`) 
//teste
