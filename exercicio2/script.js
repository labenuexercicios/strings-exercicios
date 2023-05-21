
/*
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      " 

const retirarEspacos =(frase)=>{
    const novaFrase=frase.trim()

    console.log(novaFrase)
    return novaFrase


}
const novaString=retirarEspacos(minhaString)

console.log(minhaString.length)
console.log(novaString.length)
console.log(minhaString.replace(`________.`,`sticioso`))
/* Também pode ser feito assim, em frase
console.log(`A quantidade de cacteres da string antes da remoção é ${minhaString.length}`)
console.log(`A quantidade de caracteres depois da remoção é ${novaString.length}`)*/
//Extra (sugestão usar o replace, como?)*/

function imprimeInformacoesUsuario() {
    // implemente sua lógica aqui
    // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
    const nome= prompt(`Digite seu nome`)
    const idade= prompt(`Digite sua idade`)
    const email= prompt (`Digite seu email`)
    const frase= (`Meu nome é ` + nome +`, `+ ` tenho ` + idade + ` anos, ` + ` e o meu email é ` + email )
    console.log (frase)
  
}
imprimeInformacoesUsuario()