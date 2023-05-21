//Crie a const para a frase aqui
const fraseEspecial = () =>{
    const string = (`Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"`)
    
    const trocarCores = string.replaceAll(`verde`,`rosa`).replaceAll(`azul`,`laranja`)

    const temVerde = string.includes(`verde`)

    const temLaranja = string.includes(`laranja`)

    console.log (string)
    console.log(trocarCores)
    console.log(`A frase inclui a palavra verde?`, temVerde)
    console.log(`A frase inclui a palavra laranja?`,temLaranja)

    console.log (string.replace("mas não deixe o gato sair","MAS NÃO DEIXE O GATO SAIR"))
}

fraseEspecial ()