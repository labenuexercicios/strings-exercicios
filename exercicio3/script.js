//Crie a const para a frase aqui

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\" "
console.log(`Frase Original:\n`,frase)

const fraseAuxiliar = frase.replaceAll("verde","rosa").replace("azul","laranja")
console.log(`\n Substituindo cores:
${fraseAuxiliar}
`)

const gatosair = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\" "
console.log(`\n Final da frase maiúsculo:
${gatosair.toUpperCase(`mas não deixe o gato sair`)}
`)