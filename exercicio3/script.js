//a) Crie uma const no seu código para guardar a frase (com aspas e tudo);
const text = "Jorge tem uma casa verde e com portão azul, com os dizeres: 'BOAS VINDAS, mas não deixe o gato sair'";

//b) Crie uma nova string a partir da primeira, trocando verde por rosa, e azul por laranja;
const textEdit = text.replace("verde", "rosa");
const textEdit2 = textEdit.replace("azul", "laranja");
console.log(textEdit2);

//c) Verifique se a nova string inclui verde, e se inclui laranja.
console.log(textEdit2.includes("verde"));
console.log(textEdit2.includes("laranja"));

//EXTRA: tente fazer o trecho “mas não deixe o gato sair” ficar em letras maiúsculas, assim como o “BOAS VINDAS”
const phrase = "mas não deixe o gato sair";
console.log(textEdit2.replace(phrase, phrase.toUpperCase()));

