/*
# Exercício 1

Faça um programa que pergunte ao usuário seu **nome** e suas **três comidas favoritas**. Em seguida, imprima no console a seguinte mensagem:
    
   
    Estas são as comidas favoritas de nomeDoUsuario:
    - Comida1
    - Comida2
    - Comida3
  
    
Você deve usar apenas um `console.log()` para isso

  <details> 
  <summary> 💡 Dica</summary>
  
    ⭐ Você pode juntar texto com variáveis de duas formas:
    - Concatenando as strings (com o sinal de +)
    - Utilizando template strings (e envolvendo a sua string com o sinal de CRASE ao invés de aspas ⇒ ````)
    
    Adicionar um  `\n` na string coloca uma **quebra de linha** no texto.
    */

    const registroComidasFavoritas = (nome, comida1, comida2, comida3) => {
        const impressaoNomeEComidas = `Estas são as comidas favoritas de ${nome}:
        - ${comida1}
        - ${comida2}
        - ${comida3}`

        console.log(impressaoNomeEComidas)
    }

    const registroNome = prompt('Qual seu nome?')
    const registroComida1 = prompt('Digite sua primeira comida favorita')
    const registroComida2 = prompt('Digiste sua segunda comida favorita:')
    const registroComida3 = prompt('E agora sua terceira comida favorita:')

    registroComidasFavoritas(registroNome, registroComida1, registroComida2, registroComida3)