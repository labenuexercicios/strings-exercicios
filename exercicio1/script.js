// # Exercício 1

// Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas.
// Em seguida, Imprima no console a seguinte mensagem:
    
//     ```
//     Estas são as comidas favoritas de nomeDoUsuario
//     - Comida1
//     - Comida2
//     - Comida3
//     ```
    
// Você deve usar apenas um `console.log()` para isso

//   <details> 
//   <summary> 💡 Dica</summary>
  
//     ⭐ Você pode juntar texto com variáveis de duas formas:
//     - Concatenando as strings (com o sinal de +)
//     - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE
//     ao invés de aspas ⇒ ````)
    
//     Adicionar um  `\n` na string coloca uma **quebra de linha** no texto.
  
//   </details>
    


//     -----------------------------------------------------------------------------------




const nomeUsu = prompt("Insira o seu nome")
console.log(nomeUsu)

const comidaFavorita1 = prompt("Insira o nome da sua primeira comida favorita")

const comidaFavorita2 = prompt("Insira o nome da sua segunda comida favorita")

const comidaFavorita3 = prompt("Insira o nome da sua terceira comida favorita")

console.log(`Estas são as comidas favoritas de ${nomeUsu}: \n ${comidaFavorita1} \n ${comidaFavorita2} \n ${comidaFavorita3}`)