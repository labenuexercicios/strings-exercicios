const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
let stringAtualizada = minhaString.trimEnd()

console.log("Antes: ", minhaString.length,"Depois: ", stringAtualizada.length);
stringAtualizada = stringAtualizada.replace("________", "sticioso");