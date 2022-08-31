//Crie a const para a frase aqui

const frase =
  'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"';

let newfrase = frase.replace("verde", "rosa").replace("azul", "laranja");

console.log(frase);
console.log(newfrase);

let verificar1 = newfrase.includes("verde");
let verificar2 = newfrase.includes("laranja");

console.log(
  `A nova string contém \"verde\"? ${verificar1}\nContém \"laranja\"? ${verificar2}`
);

let maiuscula = "mas não deixe o gato sair";

novafrase = newfrase.replace(
  "mas não deixe o gato sair",
  maiuscula.toUpperCase()
);
console.log(novafrase);
