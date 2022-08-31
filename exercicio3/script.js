const frase = ` Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair.`
console.log(frase)

const novaFrase = frase.replace("verde" , "rosa").replace("azul" , "laranja")
console.log(novaFrase)
console.log(novaFrase.includes("verde"))
console.log(novaFrase.includes("laranja"))
     
let fraseExtra = frase.replace("mas não deixe o gato sair" , " MAS NÃO DEIXE O GATO SAIR")
console.log(fraseExtra)