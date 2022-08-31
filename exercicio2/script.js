const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(`quantidade de characters: ${minhaString.length}`)                    //A
const SemEspaço = minhaString.trim()
console.log(SemEspaço)  


console.log(`quantidade de characters: ${SemEspaço.length}`)                      //B


const Semtraço =  minhaString.replace("________", "sticioso")                     //c
console.log(Semtraço)
