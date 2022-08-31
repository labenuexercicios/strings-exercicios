/*Faça um programa que pergunte ao usuário seu nome e suas três comidas favoritas. Em seguida, Imprima no console a seguinte mensagem:
    
    ```
    Estas são as comidas favoritas de nomeDoUsuario
    - Comida1
    - Comida2
    - Comida3
    ```
    
Você deve usar apenas um `console.log()` para isso

  <details> 
  <summary> 💡 Dica</summary>
  
    ⭐ Você pode juntar texto com variáveis de duas formas:
    - Concatenando as strings (com o sinal de +)
    - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)
    
    Adicionar um  `\n` na string coloca uma **quebra de linha** no texto.
  
  </details>*/
  
  const nomeUsuario = prompt("Qual é o seu nome?")
  const comidaFavorita1 = prompt("Escreva uma de suas comidas favoritas.")
  const comidaFavorita2 = prompt("Escreva outra comida favorita.")
  const comidaFavorita3 = prompt("Escreva só mais uma das suas comidas favoritas.")

  console.log (`Estas são as comidadas favoritas de ${nomeUsuario} : \n${comidaFavorita1}\n${comidaFavorita2}\n${comidaFavorita3}`)
