//Crie a const para a frase aqui
//a
const casagato = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
// b
const trocatroca = casagato.replace("verde","rosa").replace("azul","laranja")
//c
const temverdinho = casagato.includes("verde")
const temlaranzinha = casagato.includes("laranja")

console.log(`${casagato}${trocatroca}${temverdinho}${temlaranzinha}

${casagato.replace("mas não deixe o gato sair","MAS NAO DEIXE O GATO SAIR")}`)
//EXTRA FIZ ASSIM PQ N CONSEGUI PENSA NO JEITO toUpperCase() OU EU N SOUBE USAR SABE VOU LER MAIS 
