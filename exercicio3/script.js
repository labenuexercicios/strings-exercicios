//Crie a const para a frase aqui

//letra a)
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

console.log(frase)

//letra b)
novaFrase = frase.replaceAll("verde", "rosa")
novaFrase1 = novaFrase.replaceAll("azul", "laranja")

console.log(novaFrase1)

//letra c)
console.log(`A nova frase tem a palavra verde? ${novaFrase1.includes("verde")}`)
console.log(`A nova frase tem a palavra laranja? ${novaFrase1.includes("laranja")}`)

//EXTRA
console.log(`Deixando em maiúsculo:
${novaFrase1.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")}
`)

