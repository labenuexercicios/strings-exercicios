function imprimirSemEspaco() {
    const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
    const minhaStringSemEspacoFinal = minhaString.trim()
    const resumo2 = `a frase possui ${minhaString.length} caracteres com os espaços. Sem os espaços a frase possui ${minhaStringSemEspacoFinal.length} caracteres`   
    const resumo3 = minhaString.replace("________", "sticioso" )
    console.log(resumo2)
    console.log(resumo3)
}

imprimirSemEspaco()