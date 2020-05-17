const convert_button = document.getElementById("convert-button");
const smallAlpha = "abcdefghijklmnopqrstuvwxyz";
const largeAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


convert_button.addEventListener("click", readText);

function readText() {
  let encryptionType = document.getElementById("type-of-decryption").value;
  switch (encryptionType) {
    case "ROT13":
      caesar();
      break;
    case "NATO":
      nato();
      break;
  }
}

// ROT13 CONVERSION
function caesar() {
  const input = document.getElementById("entry").value;
  const inputArr = input.split('');
  const outputArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i].match(/[a-z]/)) {
      let index = (inputArr[i].charCodeAt() - 97 + 13) % 26
      outputArr.push(smallAlpha[index]);
    } else if (inputArr[i].match(/[A-Z]/)){
      let index = (inputArr[i].charCodeAt() - 65 + 13) % 26
      outputArr.push(largeAlpha[index]);
    } else {
      outputArr.push(inputArr[i]);
    }
  }
  var output = outputArr.join('');
  return document.getElementById("output").value = output;
}

// NATO ALPHABETS
function nato() {
  const input = document.getElementById("entry").value;
  const upperCaseInput = input.toUpperCase();
  const natoLetters = {
    "A": "Alpha", "B": "Bravo", "C": "Charlie", "D": "Delta", "E": "Echo", "F": "Foxtrot",
    "G": "Golf", "H": "Hotel", "I": "India", "J":"Juliett", "K": "Kilo", "L": "Lima", "M": "Mike",
    "N": "November", "O": "Oscar", "P": "Papa", "Q": "Quebec", "R": "Romeo", "S": "Sierra",
    "T": "Tango", "U": "Uniform", "V": "Victor", "W": "Whiskey", "X": "X-ray", "Y": "Yankee",
    "Z": "Zulu", "0": "Ze-ro", "1": "Wun", "2": "Too", "3": "Tree", "4": "Fow-er", "5": "Fife",
    "6": "Six", "7": "Sev-en", "8": "Ait", "9": "Nin-er" }
  const natoKeys = Object.keys(natoLetters);
  const inputArr = upperCaseInput.split('');
  const outputArr = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (natoKeys.includes(inputArr[i])) {
      outputArr.push(natoLetters[inputArr[i]]);
      outputArr.push(' ')
    } else {
      outputArr.push(inputArr[i])
    }
  }
  var output = outputArr.join('');
  return document.getElementById("output").value = output;
}
