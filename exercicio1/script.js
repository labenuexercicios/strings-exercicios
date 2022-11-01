/*const nome = prompt("Qual o seu nome ") 
const cor = prompt("Qual a sua cor favorita")

// frase feita com concatenação

const frase = "A cor favorita do " + nome + " é " + cor

console.log(frase)

// frase feita com template strig

console.log(`A cor favorita do ${nome} é ${cor}`)

const citacao = prompt("Escreva uma citação")

const fraseCitacao = "\" " + citacao + " \" "
console.log(fraseCitacao)

// usando o \n para quebrar a linha 

console.log(`Nome: ${nome} \nCor favorita: ${cor}`)

// letra maiuscula 

console.log(`Nome: ${nome.toUpperCase()} \nCor favorita: ${cor}`)

// mostrando a quantidade de letras do nome s

console.log(nome.length)*/


const nome = prompt ("Informe o seu nome").toLowerCase()
const email = prompt ("Informe o seu e-mail")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Boas vindas, ${nome}!`)

const fraseCadastro = `O e-mail ${email} foi cadastrado com sucesso. Boas vindas, ${nome} O nome possui ${nome.length}`

console.log (fraseCadastro)

console.log(fraseCadastro.replaceAll("r","l"))

console.log("o email possui @?", email.includes("@"))


