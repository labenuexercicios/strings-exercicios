//a)
const fraseBoasVindas = 'Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair."'

/*
# Exercício 3

A partir da frase a seguir, faça o que se pede.

```
Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
```

a) Crie uma `const` no seu código para **guardar a frase** (com aspas e tudo);

b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;

c) **Verifique** se a nova string inclui **verde**, e se inclui **laranja**.

**EXTRA:** tente fazer o trecho “mas não deixe o gato sair” ficar em **letras maiúsculas**, assim como o “BOAS VINDAS”
*/

function modificarMensagem(mensagemBoasVindas){
    const trocaDeCor = mensagemBoasVindas.replace('verde', 'rosa').replace('azul', 'laranja')
    const novaMensagem = `A nova frase fica: ${trocaDeCor}`
    const trocaMaiusculaEMinuscula = novaMensagem.replace('mas não deixe o gato sair', 'MAS NÃO DEIXE O GATO SAIR').replace('BOAS VINDAS', 'Boas vindas')

    console.log(trocaMaiusculaEMinuscula)
}

modificarMensagem(fraseBoasVindas)