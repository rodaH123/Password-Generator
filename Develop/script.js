// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = ["0", "1", "2", "3", "4","5", "6", "7", "8", "9"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

//Getting Password Length
//Criteria for the password laying out the rules for the lenght of the password
function criteria(){
  var passwordLength = parseInt(prompt("How long do you want your password? It can only be between 8 and 128 character."))
  if(Number.isNaN(passwordLength)){
    alert("Must be a number")
    return null
  }
  if (passwordLength < 8){
    alert("Password must be 8 characters")
    return null
  }
  if (passwordLength > 128){
    alert("Pasword can't be more then 128 character")
    return null
  }