const frase = `"Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
var troca = frase.replace("verde","rosa").replace("azul","laranja")
console.log(troca)
console.log(`A nova frase contém a palavra laranja? ${troca.includes("laranja")}`)
console.log(`A nova frase contém a palavra verde? ${troca.includes("verde")}`)
