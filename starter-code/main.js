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
  function upperCase() {
    return types.upperCase[Math.floor(Math.random() * types.upperCase.length)];
  },

  function lowerCase() {
    return types.lowerCase[Math.floor(Math.random() * types.upperCase.length)];
  },

  function numbers() {
    return types.numbers[Math.floor(Math.random() * types.numbers.length)];
  },

  function symbols() {
    return types.symbols[Math.floor(Math.random() * types.symbols.length)];
  },
];

const generatePassword = () => {
  let checkUpper = document.getElementById("upperCase").checked;
  let checkLower = document.getElementById("lowerCase").checked;
  let checkNumbers = document.getElementById("numbers").checked;
  let checkSymbols = document.getElementById("symbols").checked;

  if (checkUpper + checkLower + checkNumbers + checkSymbols === 0) {
    alert("No option checked");
    return;
  }

  let randomPas = include[Math.floor(Math.random()*include.length)]
}
let randomPas = include[1];
let isChecked = document.getElementById(randomPas.name);

console.log(include[1].name);
