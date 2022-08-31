//Faça um programa que pergunte ao usuário seu nome 
//e suas três comidas favoritas. 
const nome = prompt("Qual seu nome?")
const comida1 = prompt("Qual sua comida favorita?")
const comida2 = prompt("Qual sua segunda comida favorita?")
const comida3 = prompt("Qual sua terceira comida favorita?")

//Imprima no console a seguinte mensagem:
/* Estas são as comidas favoritas de nomeDoUsuario
- Comida1
- Comida2
- Comida3 */
console.log(`Estas são as comidas favoritas de ${nome}: 
\n- ${comida1} \n- ${comida2} \n- ${comida3}`)

