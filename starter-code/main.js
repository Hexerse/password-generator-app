const passwordLength = document.getElementById("length");
const passwordLengthText = document.getElementById("passwordLength");
let valueLength;
let password;

const types = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
};

const onStart = () => {
  passwordLength.value = 10;
  passwordLengthText.innerHTML = 10;
};

onStart();

passwordLength.addEventListener("input", (e) => {
  valueLength = passwordLength.value;
  changeLength(valueLength);
});

const changeLength = (valueLength) => {
  passwordLengthText.innerHTML = valueLength;
};

const include = [
  function randomupperCase() {
    return types.upperCase[Math.floor(Math.random() * types.upperCase.length)];
  },

  function randomlowerCase() {
    return types.lowerCase[Math.floor(Math.random() * types.upperCase.length)];
  },

  function randomNumbers() {
    return types.numbers[Math.floor(Math.random() * types.numbers.length)];
  },

  function randomSymbols() {
    return types.symbols[Math.floor(Math.random() * types.symbols.length)];
  },
];

const generatePassword = () => {
  let checkUpper = document.getElementById("upperCase").checked;
  let checkLower = document.getElementById("lowerCase").checked;
  let checkNumbers = document.getElementById("numbers").checked;
  let checkSymbols = document.getElementById("symbols").checked;

  if (checkUpper + checkLower + checkNumbers + checkSymbols === 0){
    alert ('No option checked')
    return;
  }
  

};

const randomPassword = () => {
  let randomPas= include[1]
}

console.log(include[1])
