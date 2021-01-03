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
const lowercaseOption = "abcdefghijklmnopqrstuvwxyz";
const uppercaseOption = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersOption = "0123456789";
const specialOption = "!#$%&()*+,-./:;<=>?@[]^_{|}~";
const allOption =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+,-./:;<=>?@[]^_{|}~";
let passwordType;
let randomCharacter;

function generateBtn() {
  // First alert when generate password button clicked
  alert(
    "Your password needs to be between '8' and '128' characters. You can pick from all uppercase, all lowercase, all numeric all special characters or all of the above."
  );

  // Second prompt asking for length of password
  let passwordLengthChoice = Number(
    prompt(
      "Please select the length of your password, from '8' to '128' characters."
    )
  );

  // Password length verification
  if (passwordLengthChoice > 7 && passwordLengthChoice < 129) {
    getPasswordType();
    // return passwordLengthChoice;
  } else {
    generateBtn();
  }

  // Third prompt asking type of password
  function getPasswordType() {
    passwordType = prompt(
      "Please type 'U' for uppercase, 'L' for lowercase, 'N' for numeric, 'S' for special characters or 'A' for all."
    ).toUpperCase();

    if (passwordType === "U") {
      passwordType = uppercaseOption;
    } else if (passwordType === "L") {
      passwordType = lowercaseOption;
    } else if (passwordType === "N") {
      passwordType = numbersOption;
    } else if (passwordType === "S") {
      passwordType = specialOption;
    } else if (passwordType === "A") {
      passwordType = allOption;
    } else {
      getPasswordType();
    }
  }

  // Generator
  for (let i = 0; i < passwordLengthChoice; i++) {
    randomCharacter = passwordType.charAt(
      Math.floor(Math.random() * passwordType.length)
    );
    console.log(randomCharacter);
  }
  // String concatenation
  let str = "";
  for (i = 0; i < passwordLengthChoice; i++) {
    str += randomCharacter;
    console.log(str);
  }

  document.getElementById("password").textContent = str;
}
