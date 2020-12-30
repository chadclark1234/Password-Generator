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
const numbersOption = "123456789";
const specialOption = "!#$%&()*+,-./:;<=>?@[]^_{|}~";
let passwordLengthConfirm;
let passwordType;
let randomCharacter;

function generateBtn() {
  // First alert when generate password button clicked
  alert(
    "Your password needs to be between '8' and '128' characters. You can pick from all uppercase, all lowercase, all numeric or all special characters."
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
      "Please type 'U' for uppercase, 'L' for lowercase, 'N' for numeric or 'S' for special characters."
    ).toUpperCase();

    if (passwordType === "U") {
      passwordType = uppercaseOption;
    } else if (passwordType === "L") {
      passwordType = lowercaseOption;
    } else if (passwordType === "N") {
      passwordType = numbersOption;
    } else if (passwordType === "S") {
      passwordType = specialOption;
    } else {
      getPasswordType();
    }
    // Generator
    for (i = 0; i < passwordLengthChoice; i++) {
      randomCharacter = passwordType.charAt(
        Math.floor(Math.random() * passwordType.length)
      );
      console.log(randomCharacter);
      document.getElementById("password").textContent = randomCharacter;
    }
  }

  // Second alert to inform choices from prompts
  // alert(
  //   `You have selected "${passwordType}" and "${passwordLength}" for your choices, click "OK" to generate password! `
  // );
}
