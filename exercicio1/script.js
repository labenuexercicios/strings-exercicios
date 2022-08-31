// Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:

// ```
// Estas são as comidas favoritas de nomeDoUsuario
// - Comida1
// - Comida2
// - Comida3
// ```
// Você deve usar apenas um console.log() para isso

const nomeUsuario = prompt ("Qual é o seu nome?")
const comida1 = prompt ("Qual a sua 1º comida favorita?")
const comida2 = prompt ("Qual a sua 2º comida favorita?")
const comida3 = prompt ("Qual a sua 3º comida favorita?")

console.log(`Essas são as três comidas favoritas da(o) ${nomeUsuario}:  \n${comida1} \n${comida2}\n${comida3}  `)