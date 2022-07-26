const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// String com espaço:

const minhaStringComEspaco = minhaString.length;
console.log(`A \"minhaString\" com os espaços extras tem ${minhaStringComEspaco} caracteres.`);

// String sem espaço:

const minhaStringSemEspaco = minhaString.trim();
console.log(`A \"minhaString\" sem os espaços extras tem ${minhaStringSemEspaco.length} caracteres.`);

// String com "sticioso":

const minhaStringSticioso = minhaStringSemEspaco.replace("________", 'sticioso');
console.log(minhaStringSticioso)