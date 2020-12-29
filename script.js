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
let passwordType;

function generateBtn() {
  // First alert when generate password button clicked
  alert(
    "Your password will need to be between '8' and '128' characters. You can pick from all uppercase, all lowercase, all numeric or all special characters."
  );

  // First prompt asking for which type of characters choice
  passwordType = prompt(
    "Please type 'U' for uppercase, 'L' for lowercase, 'N' for numeric or 'S' for special characters."
  ).toUpperCase();
  console.log(passwordType);

  // Second prompt asking for length of password
  passwordLength = Number(
    prompt(
      "Please select the length of your password, from '8' to '128' characters."
    )
  );
  console.log(passwordLength);

  // Second alert to inform choices from prompts
  alert(
    `You have selected "${passwordType}" and "${passwordLength}" for your choices, click "OK" to generate password! `
  );

  if (passwordType === "U") {
    prompt("You typed 'U'");
  } else if (passwordType === "L") {
    prompt("You typed 'L'");
  } else if (passwordType === "N") {
    prompt("You typed 'N'");
  } else if (passwordType === "S") {
    prompt("You typed 'S'");
  } else {
    prompt("You Suck");
  }

  let lowercaseOption = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseOption = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let numbersOption = 123456789;
  let specialOption = "!#$%&()*+,-./:;<=>?@[]^_{|}~";
}
