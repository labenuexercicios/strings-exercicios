const nome = prompt("Qual o seu nome?")
const comidaFav1 = prompt("Qual a sua comida favorita 1?")
const comidaFav2 = prompt("Qual a sua comida favorita 2?")
const comidaFav3 = prompt("Qual a sua comida favorita 3?")

console.log(`Estas são as comidas favoritas do(a) ${nome}: \n-Comida favorita 1: ${comidaFav1} \n-Comida favorita 2: ${comidaFav2} \n-Comida favorita 3: ${comidaFav3}`)

//___________________

//OU
/*let suaComida = 'Digite sua primeira comida favorita'
const nome = prompt("Digite seu nome")
const comida1 = prompt(suaComida)
const comida2 = prompt(suaComida.replace("primeira", "segunda"))
const comida3 = prompt(suaComida.replace("primeira", "terceira"))
const mensagem = `Estas são as comidas favoritas de ${nome} \n- ${comida1} \n- ${comida2} \n- ${comida3}`
console.log(mensagem)*/