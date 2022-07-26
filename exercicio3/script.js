//Crie a const para a frase aqui
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\"`
const novaFrase = frase.replace("verde","rosa")    
const novaFrase2 = novaFrase.replace("azul","laranja")


console.log(novaFrase2,toUpperCase("mas não deixe o gato sair"))
const detalhe = `a frase possui rosa e laranja?`
console.log(detalhe, novaFrase2.includes("rosa","laranja"))

