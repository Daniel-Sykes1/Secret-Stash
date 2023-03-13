// Assignment code here
var bigLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var littleLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var numberOption = "1234567890".split("");
var symbolOptions = "!@#$%^&*".split("");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var storedCharacters= [];
  var passwordLength = prompt("Please select between 8 - 128 characters for your password!")
  if (passwordLength > 128 || passwordLength < 8) {
    alert("The value you choose must stay between 8 - 128 characters.") 
    return ""
  }

  var sym = confirm("Would you like special symbols included within your password ?")
    if(sym) {
      storedCharacters = storedCharacters.concat(symbolOptions);
    }
    console.log(storedCharacters);

    var uppercase = confirm("Would you like UPPERCASE letters included within your password ?")
    if(uppercase) {
      storedCharacters = storedCharacters.concat(bigLetters);
    }
    console.log(storedCharacters);

    var lowercase = confirm("Would you like lowercase letters included within your password ?")
    if(lowercase) {
      storedCharacters = storedCharacters.concat(littleLetters);
    }
    console.log(storedCharacters);

    var numbers = confirm("Would you like to include numbers within your password ?")
    if(numbers) {
      storedCharacters = storedCharacters.concat(numberOption);
    }
    console.log(storedCharacters);

    if (!bigLetters && !littleLetters && !symbolOptions && !numberOption) {
      alert("Character type or symbol must be selected to proceed without error")
      return "Compliance with parameters are for users best interest. Please attempt again!";
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