//Crie uma `const` no seu código para guardar a frase (com aspas e tudo);
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

//Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
const trocandoCores = frase.replace("verde", "rosa").replace("azul", "laranja")

//Verifique se a nova string inclui **verde**, e se inclui **laranja**.
console.log(frase)
console.log(trocandoCores) //não se inclui o verde pois eu solicitei a troca por rosa. O laranja se inclui.
console.log("Tem a palavra verde? ", trocandoCores.includes("verde"))
console.log("Tem a palavra laranja? ", trocandoCores.includes("laranja"))

//**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
console.log(frase.substr(0, 73) + frase.slice(74).toUpperCase())

