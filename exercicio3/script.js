//Crie a const para a frase aqui
const verificarFrase = () => {
  const mensagem =
    'Jorge tem uma casa verde e com portão azul, com dizeres: "BOAS VINDAS, mas não deixe o gato sair"';

  const novaMensagem = mensagem
    .replaceAll("verde", "rosa")
    .replaceAll("azul", "laranja");

  console.log(novaMensagem);

  const incluirPalavra = novaMensagem.includes("verde" && "laranja");

  console.log(incluirPalavra);

  const mensagemMaiucula = "mas não deixe o gato sair";
  const transformar = mensagemMaiucula.toUpperCase();

  console.log(transformar);
};

verificarFrase();
