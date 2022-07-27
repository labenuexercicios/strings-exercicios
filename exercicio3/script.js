const frase = `Jorge tem uma casa verde e com o portão azul, com os dizeres: ` + `\"BOAS VINDAS, mas não deixe o gato sair` + `\"` 
const novaFrase = frase.replaceAll("verde", "rosa").replaceAll("azul", "laranja");
console.log(novaFrase);
console.log("A nova frase inclui verde?", novaFrase.includes("verde"));
console.log("A nova frase inclui laranja?", novaFrase.includes("laranja"));
const ultimaFrase = novaFrase.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR");
console.log(ultimaFrase)