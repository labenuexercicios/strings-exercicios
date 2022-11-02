//Crie a const para a frase aqui
const frase=("Jorge tem uma casa verde e com portão azul, com os dizeres:\" BOAS VINDAS, mas não deixe o gato sair\" ")
console.log(frase)
const novaFrase=(frase.replace("verde","rosa").replace("azul","laranja"))
console.log(novaFrase)
console.log(novaFrase.includes('verde' && 'laranja'))
const part1 ='mas nao deixe o gato sair .'.toUpperCase()
const fraseModificada=`Jorge tem uma casa verde e com portão azul, com os dizeres:\" BOAS VINDAS,${part1}`
console.log(fraseModificada)