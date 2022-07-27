const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// a- removendo o exesso de espaço
console.log(minhaString.replaceAll('_', ''));

// b- antes e depois
console.log(` minha string antes: ${minhaString.length}\n minha string depois: ${minhaString.replaceAll('_', '').length}`);

// c- substituindo
console.log(minhaString.replace('________', 'sticioso'));