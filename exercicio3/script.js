//Crie a const para a frase aqui



function substituirCores(frase) {
    
    frase = frase.replace("verde", "rosa");
    frase = frase.replace("azul", "laranja");
    return frase;
    

}

const fraseOriginal = "Jorge tem uma casa verde e com portão azul, com os dizeres: 'BOAS VINDAS, mas não deixe o gato sair'";
const trecho = "mas não deixe o gato sair"
const trechoMaiusculo = trecho.toUpperCase();
const fraseComTrechoMaiusculo = fraseOriginal.replace(trecho, trechoMaiusculo)
const fraseTrocada = substituirCores(fraseOriginal);
console.log(fraseTrocada);
console.log(fraseComTrechoMaiusculo);

//lol
=======
