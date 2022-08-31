const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

minhaStringSemEspaco = minhaString.trim()

minhaStringSubstituida = minhaStringSemEspaco.replaceAll("________", "sticioso")

console.log(`Frase antes da remoção dos espaços: ${minhaString}

A frase depois da remoção dos espaços: ${minhaStringSemEspaco}

A frase depois da substituição: ${minhaStringSubstituida}
`)