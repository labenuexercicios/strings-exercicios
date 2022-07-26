const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

console.log(minhaString.trim())
console.log(minhaString.length)


let newString = minhaString.trim()
console.log(newString.length)


const sticiosoString = minhaString.replaceAll("________","sticioso")
console.log(sticiosoString)