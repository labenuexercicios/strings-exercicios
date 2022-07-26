//Crie a const para a frase aqui
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \n\"BOAS VINDAS, mas não deixe o gato sair!\"";

console.log(frase);

console.log(frase.replace("verde", "rosa").replace("azul", "laranja").toUpperCase(), 
`\nA nova frase inclui \"verde\"? ${frase.replace("verde", "rosa").replace("azul", "laranja").includes("verde")}.`, 
`\nA nova frase inclui \"laranja\"? ${frase.replace("verde", "rosa").replace("azul", "laranja").includes("laranja")}.`);