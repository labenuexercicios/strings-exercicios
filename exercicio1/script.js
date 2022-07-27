const nomeDoUsuario = prompt("Qual seu nome?");
const comida1 = prompt("Digite sua primeira comida favorita:");
const comida2 = prompt("Digite sua segunda comida favorita:");
const comida3 = prompt("Digite sua terceira comida favorita:");
const comidasFavoritas = `Estas são as comidas favoritas de  ${nomeDoUsuario}:` + `\n` + `- ${comida1}` + `\n` + `- ${comida2}` + `\n` + `- ${comida3}`;

console.log(comidasFavoritas);