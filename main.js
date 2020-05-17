const convert_button = document.getElementById("convert-button");

convert_button.addEventListener("click", conversion);

function conversion() {
  var input = document.getElementById("entry").value;
  var smallAlpha = "abcdefghijklmnopqrstuvwxyz";
  var largeAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var inputArr = input.split('');
  var outputArr = [];
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
