const nova = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'
console.log(nova)

const novaString = nova.replace("verde","rosa")

const novaString1 = novaString.replace("azul","laranja")

console.log(novaString1)

console.log(novaString1.includes("verde", "laranja"))


const novaString2 =(`Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS ${"mas não deixe o gato sair".toUpperCase()}`)
console.log(novaString2)

