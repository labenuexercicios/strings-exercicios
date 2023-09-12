function imprimirComidasFavoritas (){
const nome = prompt("Qual o seu nome?")
const comida1 = prompt("Informe suas comidas favoritas")
const comida2 = prompt("Informe suas comidas favoritas")
const comida3 = prompt("Informe suas comidas favoritas")
console.log(`Essas são as comidas favoritas de ${nome}\n${comida1};\n${comida2};\n${comida3}`)
}

imprimirComidasFavoritas()



// *Atenção:** para esse exercício você deve adicionar 
//todas as soluções dentro da função **imprimirComidasFavoritas**.

// Faça um programa que pergunte ao usuário seu 
//**nome** e suas **três comidas favoritas**. 
// Em seguida, imprima no console a seguinte mensagem:
    
   
//     Estas são as comidas favoritas de nomeDoUsuario:
//     - Comida1
//     - Comida2
//     - Comida3
  
    
// Você deve usar apenas um `console.log()` para isso

//   <details> 
//   <summary> 💡 Dica</summary>
  
//     ⭐ Você pode juntar texto com variáveis de duas formas:
//     - Concatenando as strings (com o sinal de +)
//     - Utilizando template strings (e envolvendo a sua string 
// com o sinal de CRASE ao invés de aspas ⇒ ````)
    
//     Adicionar um  `\n` na string coloca uma 
// **quebra de linha** no texto.