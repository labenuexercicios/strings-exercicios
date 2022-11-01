/* # Exercício 1

Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
    ```
    Estas são as comidas favoritas de nomeDoUsuario
    - Comida1
    - Comida2
    - Comida3 */

const comida1=prompt("Qual é a sua comida preferida")
const comida2=prompt("Digite a segunda comida favorita")
const comida3=prompt("Digite a terceira comida favoria")

console.log(`As suas comidas favoritas são:\n1º ${comida1}\n2º ${comida2}\n3º ${comida3}`)