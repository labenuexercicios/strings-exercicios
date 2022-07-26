let minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";



stringSemTrim = minhaString.trim()
console.log(stringSemTrim.length);

console.log(minhaString.length);
console.log(minhaString);

let novaString = minhaString.replaceAll('________', 'sticioso')
console.log(novaString);