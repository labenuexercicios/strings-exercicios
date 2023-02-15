console.log("A)")
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
`
console.log(frase)

console.log("--------------------------------------------------------------------------------------------------------------------")
console.log("B)")
const ajuste1 = frase
.replace("verde","rosa")
.replace("azul","laranja")
console.log(ajuste1)

console.log("-------------------------------------------------------------------------------------------------------------------")
console.log("C)")
const verifica1 = ajuste1.includes("verde")
const verifica2 = ajuste1.includes("laranja")
console.log(verifica1, verifica2)

console.log("-------------------------------------------------------------------------------------------------------------------")



console.log("Extra)")
const ajuste2 = ajuste1.replace("mas não deixe o gato sair","mas não deixe o gato sair".toLocaleUpperCase())

console.log(ajuste2)
