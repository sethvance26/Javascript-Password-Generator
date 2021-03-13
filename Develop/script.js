var specialCharacter = "@#$%^&*())_+=?><~`";

var lower_chars = "abcdefghijklmnopqrstuvwxyz";

var upper_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numbers = "1234567890";

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

 //user input for confirms

var password = ""; //This is the password that gets displayed in textbox

function writePassword(word) {

  var passwordText = document.querySelector("#password");
  passwordText.value = word; //word is placeholder for the value of password text (so that something shows up)
}

function generatePassword() {
  var userChoice = ""; 
  var passLength = parseInt(window.prompt("How many characters would you like the password to be?"));
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(passLength);
  if (!passLength) {
    
    return;
}
else if (passLength > 128) {
  //confirmation for the max characters for password length
  alert("it needs to be less than 129");
  return;

}
else if (passLength < 8 ) {
  alert("it needs to be more than 8");
  return;
}

else {
  var isSpecChosen = window.confirm("click OK to confirm including special characters");
  console.log(isSpecChosen);

  var isLowerCase = window.confirm("click OK to confirm including lowercase characters");
  console.log(isLowerCase);

  var isUpperCase = window.confirm("click OK to confirm including uppercase characters");
  console.log(isUpperCase);

  var isNumber = window.confirm("click OK to confirm including numeric characters");
}
if (!isSpecChosen && !isLowerCase && !isUpperCase && !isNumber) {
  alert("You didn't choose a character type!");
  return;

}
if (isSpecChosen) {
  userChoice = userChoice.concat(specialCharacter);
}
if (isLowerCase) {
  userChoice = userChoice.concat(lower_chars);
}
if (isUpperCase) {
  userChoice = userChoice.concat(upper_chars);
}
if (isNumber) {
  userChoice = userChoice.concat(numbers);
}
console.log(userChoice);
guessWord(passLength, userChoice)
}

function guessWord(length, choice) { //TAKING USER CHOICES AND RANDOMIZING THE ARRAYS IN A FOR LOOP.
  console.log("Goodnight", length, choice)
  
  var password = "";
  for ( var i = 0; i < length; i++) {
  password += choice.charAt(Math.floor(Math.random() * choice.length));
  console.log("Hello", password);
  }
  writePassword(password)
}
