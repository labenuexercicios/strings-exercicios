const minhaString =
  'Eu não sou supersticioso, mas sou um pouco ________.      ';

console.log(minhaString.length); //58//

//a//
let newString = minhaString.trim();

//b//
console.log(newString.length); //52//

//c//
let newString2 = newString.replace('________', 'supersticioso');
console.log(newString2);

// :) //
