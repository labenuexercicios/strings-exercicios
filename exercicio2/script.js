const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaStringTrim = minhaString.trim()

console.log(' A string antes do trim tinha ' + minhaString.length + ' caracteres ')
console.log(' A string depois do trim ficou com ' + minhaStringTrim.length + ' caracteres ')

const substituicao = minhaString.replace('________.      ' , 'sticioso')

console.log(substituicao)