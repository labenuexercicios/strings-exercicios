const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// a) Remova o excesso de espaços no final da string;
console.log(minhaString.trim())


console.log(minhaString.length)
console.log(minhaString.trim().length)

const minhaNovaString = minhaString.replace('________.', 'sticioso')
console.log(minhaNovaString)