// Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
// ```
// Estas são as comidas favoritas de nomeDoUsuario
// - Comida1
// - Comida2
// - Comida3

const nomeDoUsuario = prompt('qual seu nome?')

const Comida1 = prompt('qual sua primeira comida preferida?')
const Comida2 = prompt('qual sua segunda comida preferida')
const Comida3 = prompt('qual sua terceira comida preferida?')

const AsComidasPreferidas = 'As comidas preferidas de '+nomeDoUsuario+ 'são: \'' +Comida1+' e '+Comida2+' e '+Comida3+ '\'.'
// const AsComidasPreferidas = 'As comidas preferidas de '+nomeDoUsuario+ 'são: \'' +Comida1+', '+Comida2+' , '+Comida3+ '\'.' 

console.log('COMIDAS', AsComidasPreferida)