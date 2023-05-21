// Exercício 1
function imprimePreferencias (nome, comida1, comida2,comida3){
    const string = `Estas são as comidas favoritas de ${nome}:
    ${comida1}
    ${comida2}
    ${comida3}`

    console.log(string)
}

nomeUser= prompt(`Qual o seu nome`)
comidaFav1= prompt(`Qual sua primeira comida favorita?`)
comidaFav2= prompt(`Qual sua segunda comida favorita?`)
comidaFav3= prompt(`Qual sua terceira comida favortita?`)

imprimePreferencias (nomeUser,comidaFav1,comidaFav2,comidaFav3)
