//Exercício 1
function imprimirComidasFavoritas (){
    
    const nomeUsuario = prompt("Por favor, me informe seu nome")
    const comida1 = prompt("Agora me informe sua comida preferida")
    const comida2 = prompt("Agora me informe sua segunda comida preferida")
    const comida3 = prompt("Agora me informe sua terceira comida preferida")
    const resumo = `Estas são as comidas favoritas de ${nomeUsuario}:\n- ${comida1}\n- ${comida2}\n- ${comida3}`
    console.log(resumo)
}

imprimirComidasFavoritas()

//Exercício 2