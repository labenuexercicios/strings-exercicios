const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.    ";

const retirarEspaco = minhaString.trim();

console.log(retirarEspaco.trim());

const quantidadeCaracteresAntes = minhaString.length;

const quantidadeCaracteresDepois = retirarEspaco.length;

console.log(quantidadeCaracteresAntes);

console.log(quantidadeCaracteresDepois);

const novaMinhaString = minhaString.replaceAll(`______`, "sticioso");

console.log(novaMinhaString);

// const substituirTracos = (item) => {
//   const minhaString =
//     "Eu não sou supersticioso, mas sou um pouco ________.    ";
//   minhaString = item.replaceAll(`______`, "sticioso");
//   return minhaString;
// };

// console.log(substituirTracos());
