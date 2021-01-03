// Assignment Code

// const lowercaseArray = "abcdefghijklmnopqrstuvwxyz".split("");

const lowercaseOption = "abcdefghijklmnopqrstuvwxyz";
const uppercaseOption = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersOption = "0123456789";
const specialOption = "!#$%&()*+,-./:;<=>?@[]^_{|}~";
const allOption =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&()*+,-./:;<=>?@[]^_{|}~";
let passwordType;
let randomCharacter;
let passwordConfirm;

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
    );
    if (passwordType) {
      passwordType = passwordType.toUpperCase();
    } else {
      return;
    }
    if (passwordType === "U") {
      passwordConfirm = uppercaseOption;
    } else if (passwordType === "L") {
      passwordConfirm = lowercaseOption;
    } else if (passwordType === "N") {
      passwordConfirm = numbersOption;
    } else if (passwordType === "S") {
      passwordConfirm = specialOption;
    } else if (passwordType === "A") {
      passwordConfirm = allOption;
    } else {
      getPasswordType();
    }
  }

  // Generator
  let str = "";
  for (let i = 0; i < passwordLengthChoice; i++) {
    randomCharacter = passwordConfirm.charAt(
      Math.floor(Math.random() * passwordConfirm.length)
    );
    console.log(randomCharacter);
    str += randomCharacter;
  }
  console.log(str);
  document.getElementById("password").textContent = str;
}
