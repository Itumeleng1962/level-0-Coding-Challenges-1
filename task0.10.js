function commonLetters(firstNoun, secondNoun) {
  let stringOne = firstNoun.toLowerCase();
  let stringTwo = secondNoun.toLowerCase();
  let output = "common letter: ";
let duplicateLetter = "";
for (let i = 0; i < stringOne.length; i += 1) {
  if (duplicateLetter.indexOf(stringOne[i]) === -1) {
    if (stringTwo.indexOf(stringOne[i]) !== -1) {
      duplicateLetter += stringOne[i];
    }
  }
}
return output + [...duplicateLetter];
};

console.log(commonLetters("Andile","Anele"));
