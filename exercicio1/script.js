let nomeDoUsuario
let comida1
let comida2
let comida3

//Perguntas do prompt
let nomeDoUsuarioPrompt = 'Qual é o seu nome?'
let comida1Prompt = 'Qual é asua comida favorita'
let comida2Prompt = 'Qual é a  sua segunda comida favorita'
let comida3prompt = 'qual é a sua terceira comida favorita'

//Execução do prompt
nomeDoUsuario = prompt(nomeDoUsuarioPrompt)
comida1 = prompt(comida1Prompt)
comida2 = prompt(comida2Prompt)
comida3 = prompt(comida3prompt)

// Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem
//resultado da impressão

console.log(`Estas são as comidas favoritas de ${nomeDoUsuario}
- ${comida1}
- ${comida2}
- ${comida3}
`)