const frase = (`\`\`\`\nJorge tem uma casa verde e com o portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\" \n \`\`\``)
const exchange = (frase.replace("verde","rosa").replace("azul","laranja"))
const checks1 = (exchange.includes("verde"))
const checks2 = (exchange.includes("laranja"))
// Posso fazer o includes com 2 parâmetros
console.log(frase)
console.log(exchange)
console.log(checks1)
console.log(checks2)
