const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
console.log(minhaString.length)

console.log(minhaString.trim() + minhaString.length)

novastring = minhaString.replaceAll(/_+/ig,"sticioso")//modificador que começa a contar pelo //, depois vem a letra que queremos pegar, depois o + é para se houver 1 ou mais, fecha /, i é para ignorar "case sensitive: Maiusculo ou minusculo", g é para verificar toda a string.

// -> \d -> serve para substitui numero pela string.

console.log(novastring)
