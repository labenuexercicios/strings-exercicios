// Exercício 3

//a)
const frase = `Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`
console.log(frase)
//b)
const fraseAlterada = frase.replace("verde","rosa").replace("azul","laranja")
console.log(fraseAlterada)
//c)
let possuiVerde = fraseAlterada.includes("verde")
let possuiAzul = fraseAlterada.includes("azul")
console.log(`possui a cor verde? ${possuiVerde} \n possui a cor azul? ${possuiAzul}  `)

/**Extra 1 */ 
let fraseExtra = frase.replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")  
console.log(fraseExtra) 
/* Extra 2*/
/*let posicaoInicial = frase.indexOf("mas")
let posicaoFinal = frase.indexOf("sair")
//fraseExtra = frase.substring((0,94))
console.log(fraseExtra)
console.log(posicaoInicial)
console.log(posicaoFinal) 

//**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS” */