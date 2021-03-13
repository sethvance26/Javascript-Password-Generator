var specialCharacter = ['@', '%', '+','/',"'",'!','#','$','^','?',';',',',')','(','}','{','}','{','~','-','_','.',];

var lower_chars = ["abcdefghijklmnopqrstuvwxyz"];

var upper_chars = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

var numbers = ["1234567890"];

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

var userChoice = [];  //user input for confirms

var password = ""; //This is the password that gets displayed in textbox

// function writePassword() {
//   var userChoice = window.prompt("Please enter how many characters you would like your password to consist of:");
//   var password = generatePassword(userChoice);
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

function generatePassword() {
  var passLength = parseInt(window.prompt("How many characters would you like the password to be?"));
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(passLength);
  if (!passLength) {
    
    return;
}
else if (passLength > 128) {
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
if (!isSpecChosen){
  userChoice = user.Choice.concat(specialCharacter);
}
if (isLowerCase){
  userChoice = userChoice.concat(lower_chars);
}
if (isUpperCase){
  userChoice = userChoice.concat(upper_chars);
}
if (isNumber){
  userChoice = userChoice.concat(numbers);
}
console.log(userChoice);
}

function password(passLength) {
  var password = password.length;
  for ( var i = 0; i < passLength; i++) {
  passLength += password.chatAt(Math.floor(Math.random() * userChoice));
  }
}
