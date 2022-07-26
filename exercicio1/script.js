

const nome= prompt('Qual é o seu nome?')
const Comida1= prompt(' Qual a sua primeira comida preferida?')
const comida2= prompt ('Qual a sua segunda comida preferida?')
const comida3= prompt('Qual sua terceira comida preferida?')

console.log('Qual o seu nome?', nome,'Qual a sua primeira comida preferida?', Comida1,"Qual a sua segunda comida preferida?", comida2, 'Qual a sua terceira comida preferida', comida3)
 
const stringConcatenada= 'Qual  é  o seu nome' + nome + 'e' + 'Qual a sua comida preferida' + Comida1 + 'e a segunda e terceira comida preferida é \'' + comida2 + comida3 + "\""
console.log(stringConcatenada);
const templateString= `Nome: ${nome} \nprimeira comida preferida: ${Comida1} \nseguda comida preferida: ${comida2} \nterceira comida preferisa: ${comida3}`
console.log(templateString)
