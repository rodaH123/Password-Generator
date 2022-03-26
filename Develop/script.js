// Assignment Code
var generateBtn = document.querySelector("#generate");

var password criteria = prompt(Here are your passowrd criterias)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//DOM elements
const resultEl = document.getElementById('result');
const lenghtEl = document.getElementById('lenght');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const SymbolEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('result');


const randomFunc = {
  lower: getRandomLower,
  upper:getRandomUpper,
  Number:getRandomNumber,
  Symbol:getRandomSymbol

};

// Generator function - 

function getRandomLower() {
  return String.fromCharcode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
  return String.fromCharcode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber() {
  return String. fromCharcode(Math.floor(Math.random() * 26) + 48)
}

function getRandomSymbol() [
  const symbols =" !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  return symbols [Math.Floor(Math.random() *symbols.lenght:)};
  }

console.log(getRandomNumber())



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
const lenght = lenghtEl.value;
const hasLower = lowercaseEl.ariaChecked
const hasUpper = uppercaseEl.
const hasNumber = SymbolEl.ariaChecked;



console.log(lenght);

function 
