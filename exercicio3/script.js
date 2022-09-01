`strict`;
//a//
let Add = 'mas não deixe o gato sair';
let frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, ${Add}`;
console.log(frase);

//b//
let novaCasa = frase.replace('verde', 'rosa').replace('azul', 'laranja');
console.log(novaCasa);

//c//
console.log(novaCasa.includes('laranja'));
console.log(novaCasa.includes('verde'));

//extra//
let add2 = Add.toUpperCase();
let frase2 = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, ${add2}`;
console.log(frase2);

// extra 2 - teste de método que funciona//

let fraseExtra =
  'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"';

let fraseExtra2 = fraseExtra.replace(
  'mas não deixe o gato sair',
  fraseExtra.substring(78, 103).toUpperCase()
);
console.log(fraseExtra2);

// :) //
