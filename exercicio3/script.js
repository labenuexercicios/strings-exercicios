const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair`
const frase1= `Jorge tem uma casa verde`
const novafrase1= frase1.replace ("verde", "rosa ")
const frase2 = `e com portão azul`
const novafrase2= frase2.replace ("azul" , "laranja ")
const frase3 = `com os dizeres: "BOAS VINDAS,`
const frase4 = ` mas não deixe o gato sair`
const novafrase4 = frase4.toUpperCase()
const novafrase = novafrase1 + novafrase2 + frase3 + novafrase4
console.log (novafrase)