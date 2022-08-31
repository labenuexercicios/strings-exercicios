//*Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"

//a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo);
const casaVA = ("Jorge tem uma casa verde e com portão azul, com os dizeres: BOAS VINDAS, mas não deixe o gato sair")
console.log(casaVA)
//b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
const trocarVR = casaVA.replaceAll("verde","rosa")
const trocarAL = trocarVR.replaceAll("azul","laranja")
console.log(trocarAL)

//c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.
console.log("A segunda frase tem as cores verde e laranja?", trocarAL.includes("verde" && "laranja"))
//**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
let maius = ("mas não deixe o gato sair") 
let subs = maius.toUpperCase("mas não deixe o gato sair")
const frasefinal = trocarAL.replace("mas não deixe o gato sair" ,subs) 
console.log(frasefinal)