const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log(frase)
const novaFrase = frase.replaceAll('verde', 'rosa').replaceAll('azul', 'laranja') 
console.log(novaFrase.replaceAll("mas não deixe o gato sair", "mas não deixe o gato sair".toUpperCase()))