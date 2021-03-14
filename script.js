var specialCharacter = "@#$%^&*())_+=?><~`";

var lower_chars = "abcdefghijklmnopqrstuvwxyz";

var upper_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numbers = "1234567890";

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

// Above we created strings of data for each character type, and associated them with variables. 


var password = ""; //This is the password that gets displayed in textbox

function writePassword(word) {

  var passwordText = document.querySelector("#password");
  passwordText.value = word; //word is placeholder for the value of password text (so that something shows up)
}

function generatePassword() {
  var userChoice = ""; // This is the userinput for confirm choices. 
  var passLength = parseInt(window.prompt("How many characters would you like the password to be?")); 
  //The line above converts user input from a string to an integer
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(passLength);
  if (!passLength) {
    
    return;
}
else if (passLength > 128) {
  //this is the validation for the max characters for password length
  alert("it needs to be less than 129");
  return;

}
else if (passLength < 8 ) {
  //this is the validation for the lowest amount of characters for password length
  alert("it needs to be more than 8");
  return;
}

//The lines below are window pop-ups for the user to confirm what type of characters they want.

else {
  var isSpecChosen = window.confirm("click OK to confirm including special characters");
  console.log(isSpecChosen);

  var isLowerCase = window.confirm("click OK to confirm including lowercase characters");
  console.log(isLowerCase);

  var isUpperCase = window.confirm("click OK to confirm including uppercase characters");
  console.log(isUpperCase);

  var isNumber = window.confirm("click OK to confirm including numeric characters");
} 
// The line below is alerting the user if they did not choose any special characters. 

if (!isSpecChosen && !isLowerCase && !isUpperCase && !isNumber) { 
  alert("You didn't choose a character type!");
  return;

  // The lines below are saying "If user clicks ok on the confirmation, then the specified character will concatinate."
  //If user selects Cancel, it will not run that corresponding line of code. 

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
  for ( var i = 0; i < length; i++) { //This is a for loop to create a password based off the input from window prompt and user choices
  password += choice.charAt(Math.floor(Math.random() * choice.length));
  console.log("Hello", password);
  }
  writePassword(password)
}
// This function above is for calculating the password based off of the user's preferences (the confirms and prompts)