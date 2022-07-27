
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      "
//a
console.log(minhaString)
//console.log(minhaString.length)

const minhaTrim = minhaString.trim();
console.log(minhaTrim)
//console.log(minhaTrim.length)

//c
const novaString = minhaString.replace("________", "sticioso")
console.log(novaString)

console.log(`Antes do trim ${minhaString.length} \nDepois do trim ${minhaTrim.length}`)