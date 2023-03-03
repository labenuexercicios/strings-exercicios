//Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, imprima no console a seguinte mensagem:
//Você deve usar apenas um console.log() para isso.
const nomeDoUsario = prompt("Qual seu nome?");
const comida1 = prompt("Qual sua primeira comida favorita?");
const comida2 = prompt("Qual sua segunda comida favorita?");
const comida3 = prompt("Qual sua terceira comida favorita?");

console.log(`
Estas são as comidas favoritas de ${nomeDoUsario}:\n
- ${comida1}\n
- ${comida2}\n
- ${comida3}
`);

