const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

const retiraEspaco = (sentenca)=>{
const sentencaCortada = sentenca.trim()
return sentencaCortada
}

const minhaStringCortada = retiraEspaco(minhaString)
console.log( minhaStringCortada)
