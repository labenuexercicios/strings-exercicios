
// Criei um texto entre aspas para identificar as strings
const frase= "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\" "

// O replace faz a troca das cores, verde e rosa, azul e laranja.
const novaFrase = frase.replace("verde", "rosa").replace("azul", "laranja")
console.log(novaFrase)

// O includes retornar a frase "contem verde" perguntando se é verdadeiro ou falso.
const StringVerde = novaFrase.includes("verde")
console.log("contem verde? "+StringVerde)

// O includes retornar a frase "contem laranja" perguntando se é verdadeiro ou falso.
const StringLaranja = novaFrase.includes("laranja")
console.log("contem laranja? "+StringLaranja)

// O includes tenta incluir nessa frase o verde ou laranja, atraves do &&, sabendo que se pode obdecer a regra.
const StringVerdeLaranja = novaFrase.includes("verde") && novaFrase.includes("laranja")
console.log(StringVerdeLaranja)
