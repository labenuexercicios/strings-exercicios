const frase1 = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"'

let frase2 = frase1.replace("verde", "rosa")
frase2 = frase2.replace("azul", "laranja")

console.log(frase2)

document.write(`<h3>${frase2}</h3>`) // Print na tela do site, <h1> abre e fecha a fraze para colocar como negrito, o 1 que ta depois de h é para definir o tamanho letra quanto maior o número menor a letra.