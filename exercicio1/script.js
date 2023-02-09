const nomeUsuario = prompt("Qual é o seu nome?");
const primeiraComida = prompt("Diga uma comida favorita:");
const segundaComida = prompt("Diga outra comida favorita");
const terceiraComida = prompt("Diga mais uma comida favorira");

function infoUsuario(nome, comidaUm, comidaDois, comidaTres) {
  const mensagem = `Esta são as comidas favoritas de ${nome}: 
  ${comidaUm}
  ${comidaDois}
  ${comidaTres}`;
  console.log(mensagem);
}

infoUsuario(nomeUsuario, primeiraComida, segundaComida, terceiraComida);
