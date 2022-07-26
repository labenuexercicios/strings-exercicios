const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// PASSO A

const minhaString2 = minhaString.trim();
console.log(minhaString2);

// PASSAO B
console.log(`Sem remoção dos espaços ${minhaString.length}.`);
console.log(`Com remoção dos espaços ${minhaString2.length}.`);

// PASSO C

console.log(minhaString2.replace("________", "sticioso"));
