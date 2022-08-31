const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
const fraseSubstituida = frase.replaceAll("verde", "rosa").replaceAll("azul", "laranja").replaceAll("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR")
console.log(fraseSubstituida)
console.log(fraseSubstituida.includes("verde"))
console.log(fraseSubstituida.includes("laranja"))