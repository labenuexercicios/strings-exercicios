// Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida,
// Imprima no console a seguinte mensagem:
    
//     ```
//     Estas são as comidas favoritas de nomeDoUsuario
//     - Comida1
//     - Comida2
//     - Comida3
//     ```
    
// Você deve usar apenas um `console.log()` para isso

const nomeDoUsuario = prompt("Olá, qual seu nome?");
const comida1 = prompt("Diga sua comida preferida 1/3");
const comida2 = prompt("Diga sua comida preferida 2/3");
const comida3 = prompt("Diga sua comida preferida 3/3");

console.log("A comida preferida de", nomeDoUsuario, "é", comida1, ",", comida2,"e", comida3);