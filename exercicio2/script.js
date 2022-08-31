const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const minhaStringReduce = minhaString.trim()

console.log(minhaString.length)//58
console.log(minhaStringReduce)
console.log(minhaStringReduce.length)//52

console.log(minhaStringReduce.replaceAll("________", "\"sticioso\""))

