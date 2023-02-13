function comidasFavoritas (nomeDoUsuario, comidaFavorita1, comidaFavorita2, comidaFavorita3) {
    const mensagem = `Estas são as comidas favoritas de ${nomeDoUsuario}:
    - ${comidaFavorita1}
    - ${comidaFavorita2}
    - ${comidaFavorita3}`
    console.log(mensagem)
}

const nomeUsuario = prompt("Informe seu nome")
const comida1 = prompt("Informe sua primeira comida favorita")
const comida2 = prompt("Informe sua segunda comida favorita")
const comida3 = prompt("Informe sua terceira comida favorita")

comidasFavoritas(nomeUsuario, comida1, comida2, comida3)