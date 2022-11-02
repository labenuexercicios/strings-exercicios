// Exercício 1

// Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. 
// Em seguida, Imprima no console a seguinte mensagem:
    
//     ```
//     Estas são as comidas favoritas de nomeDoUsuario
//     - Comida1
//     - Comida2
//     - Comida3
//     ```
    
// Você deve usar apenas um `console.log()` para isso

let comidaFavorita = (seuNome, comida1, comida2, comida3) => {
    seuNome = prompt("Qual o seu nome?")
    comida1 = prompt("Quais as suas 3 comidas favoritas?")
    comida2 = prompt("Quais as suas 3 comidas favoritas?")
    comida3 = prompt("Quais as suas 3 comidas favoritas?")
    console.log(`Estas são as comidas favoritas de ${seuNome}:\n
- ${comida1}\n
- ${comida2}\n
- ${comida3}`)
}
comidaFavorita()


    