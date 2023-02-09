// Método Template String
/*
function recebeDados(nome, comida){
    const recebeNome = prompt(`Qual seu nome?`)
    const comida1 = prompt(`Me diga uma comida favorita:`)
    const comida2 = prompt(`Me diga outra comida favorita:`)
    const comida3 = prompt(`Agora a última comida favorita:`)
    const valorFinal = (`Estas são as comidas favoritas de ${recebeNome}:\n
- ${comida1}\n
- ${comida2}\n
- ${comida3}`)
    return console.log(valorFinal)
}

recebeDados()
*/
//Método Cocatenando
/*
const recebeDados = (nome, comida) => {
    const recebeNome = prompt(`Qual seu nome?`)
    const comida1 = prompt(`Me diga uma comida favorita:`)
    const comida2 = prompt(`Me diga outra comida favorita:`)
    const comida3 = prompt(`Agora a última comida favorita:`)
    const valorFinal = "Estas são as comidas favoritas de " +recebeNome+ "\n" 
    + comida1 + "\n"
    + comida2 + "\n"
    + comida3 +""

    console.log(valorFinal)

}
recebeDados()
*/