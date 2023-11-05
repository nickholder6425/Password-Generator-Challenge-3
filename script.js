// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // The goal of this function is to create a password
var {passwordLength, characterString}= promptUser();
var characterArray = characterString.split("")
var results = ""
for(var i=0; i<passwordLength; i++) {
var index = Math.floor(Math.random()*characterArray.length)
var character = characterArray [index]
results+=character
}
  return results
}
function promptUser() {
  var characterString = ""
  var passwordLength = prompt("Please enter your desired password length.");
  var acceptLower = confirm("Would you like lowercase letters?");
  if(acceptLower === true) {
characterString = characterString.concat("abcdefghijklmnopqrstuvwxyz")
  }
  var acceptUpper = confirm("Would you like uppercase letters?");
  if(acceptUpper) {
    characterString = characterString.concat("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
  }
  if(confirm("Would you like numbers?")) {
    characterString = characterString.concat("0123456789");
  }
  if(confirm("Would you like special characters?")) {
    characterString+="!@#$&%"
  }
console.log(characterString)
if(characterString === "") {
  alert("Must select at least one character type.");

return;
}
return {
  passwordLength, characterString
} 
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
