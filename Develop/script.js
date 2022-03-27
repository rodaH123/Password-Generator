// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var number = ["0", "1", "2", "3", "4","5", "6", "7", "8", "9"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

//Getting Password Length
//Criteria for the password laying out the rules for the lenght of the password. 
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
  //Created the variables for the character types included in the password prompt. This includes 4 different character types. 
  var upperConfirm = window.confirm("Would you like Upper Cases in your password?")
  var lowerConfirm = window.confirm("Would you like Lower Cases in your password?")
  var numberConfirm = window.confirm("Would you like Numbers in your password?")
  var symbolConfirm = window.confirm ("Would you like Symbols in your password?")

  // Created function to verify that character types are adhering to password criteria and if not, prompt is created to remind password criteria.
if(upperConfirm === false && lowerConfirm === false && numberConfirm === false && symbolConfirm === false) {
    window.alert("Your password must include at least one of the four criteria! Please select again")
    return null
  }  
  
  //Storing the password criteria values into an object.
  var passwordCriteria = {
    passwordLength: passwordLength,
    upperConfirm: upperConfirm,
    lowerConfirm: lowerConfirm,
    numberConfirm: numberConfirm,
    symbolConfirm: symbolConfirm
  }
  return passwordCriteria
}

