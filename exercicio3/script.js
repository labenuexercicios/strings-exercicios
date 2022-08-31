//Jorge tem uma casa verde e com portão azul, com os dizeres: 
//"BOAS VINDAS, mas não deixe o gato sair"

//a) Crie uma const no seu código para guardar a frase (com aspas e tudo)
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

//b) Crie uma nova string a partir da primeira, 
//trocando verde por rosa, e azul por laranja;
const novaFrase = frase.replace("verde","rosa").replace("azul","laranja")

//c) Verifique se a nova string inclui verde, e se inclui laranja.
console.log(`Frase com as substituições: ${novaFrase}`)

//EXTRA: tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, 
//assim como o “BOAS VINDAS”
const fraseMaius = "mas não deixe o gato sair".toUpperCase()
console.log(`Frase maiscula: ${novaFrase.replace(`mas não deixe o gato sair`, fraseMaius)}`)