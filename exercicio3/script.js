//Crie a const para a frase aqui

// Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
// a) Crie uma const no seu código para guardar a frase (com aspas e tudo);

const frase = ("Jorge tem uma casa verde e com portão azul, com os dizeres:     \"BOAS VINDAS, mas não deixe o gato sair\"")
console.log(frase)

// b) Crie uma nova string a partir da primeira, trocando verde por rosa, e azul por laranja;

const alterarcor = frase.replace("verde", "rosa").replace("azul" , "laranja")
console.log(alterarcor)

// c) Verifique se a nova string inclui verde, e se inclui laranja. (Para verificar se ele encontra a cor verde e laranja)

const corVerde = alterarcor.includes("verde")
console.log(corVerde)

const corLaranja = alterarcor.includes("laranja")
console.log(corLaranja)

// EXTRA: tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”



