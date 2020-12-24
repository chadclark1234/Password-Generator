// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

function generateBtn() {
  alert(
    "Your password will need to be between '8' and '128' characters. You can pick from all uppercase, all lowercase, all numeric or all special characters."
  );
  let passwordChoice = prompt(
    "Please type 'U' for uppercase, 'L' for lowercase, 'N' for numeric or 'S' for special characters."
  ).toUpperCase();

  console.log(passwordChoice);
}
