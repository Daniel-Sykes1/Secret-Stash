// Assignment code here
var bigLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var littleLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var numberOption = "1234567890".split("");
var symbolOptions = "!@#$%^&*".split("");


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var storedCharacters= []; // empty array that stores selected character 
  var generatedText=[]; // empty array that will store the generated text i.e. created password

  var passwordLength = prompt("Please select between 8 - 128 characters for your password!") // initial prompt

  if (passwordLength > 128 || passwordLength < 8) {
    alert("The value you choose must stay between 8 - 128 characters.") 
    return ""
  } // parameter and alert that informs user they need to stay within provided range

  var sym = confirm("Would you like special symbols included within your password ?")

    if(sym) {
      storedCharacters = storedCharacters.concat(symbolOptions);
    } // if it is confirmed that symbols are needed they will be stored in the storedCharacter array and the concat feature adds them to the other selected styles
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

    for (var i = 0; i < passwordLength; i++) {
      var index = Math.floor(Math.random() * storedCharacters.length);
      var textAdditions = storedCharacters[index];
      generatedText.push(textAdditions)
    }
    return generatedText.join("")
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);