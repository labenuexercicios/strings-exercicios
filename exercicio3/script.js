const string = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\" "
const string2 = string.replace("verde", "rosa")
let string3 = string2.replace("azul","laranja")
console.log(string3)
console.log("possui a string verde?", string3.includes("verde"))
console.log("possui a string laranja?", string3.includes("laranja"))
 string3 = 'Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS,'
const string4 = 'mas não deixe o gato sair\"'
console.log(string3, string4.toUpperCase())