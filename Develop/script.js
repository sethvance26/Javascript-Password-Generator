// Line three is making a variable (generateBtn) for the ID of generate
 
var generateBtn = document.querySelector("#generate");

var collectionOfLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()~+=-_<>?[{]},";
// var specialChar = "!@#$%^&*()?:;-+-";

// var lowerCase = "abcdefghijklmnopqrstuvwxyz";

// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// var numerals = "123456789";

// // Above we made four new variables with arrays for special characters, 
// lowercase and uppercase characters as well as numbers.

function random() {



    var randomChar = collectionOfLetters[Math.floor(Math.random() * collectionOfLetters.length)]

    return randomChar;
}


function generatePassword(length) {
  var password = ""; 
  for (var i = 0; i < length; i++) {
  var temp = random()
  password += temp; 
  console.log("loop", i, password );
// need to generate a random string,
}

return password;
}

var minimumNumberOfCharacters= 8;
var userPasswordlength = 32;



// Write password to the #password input
function writePassword() {
  var userChoice = window.prompt("Please enter how many characters you would like your password to consist of:")
  var password = generatePassword(userChoice);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

