const comidasFav = (nome, com1, com2, com3) => {
  console.log(`Essas são as comidas favoritas 
${nome}
${com1}  
${com2}
${com3}`)
}

const nomeUser = prompt('Qual seu nome')
const comFav1 = prompt('Qual sua comida fav1')
const comFav2 = prompt('Qual sua comida fav2')
const comFav3 = prompt('Qual sua comida fav3')

comidasFav(nomeUser, comFav1, comFav2, comFav3)
