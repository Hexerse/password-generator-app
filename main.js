let passwordLength = document.getElementById("length");
let passwordLengthText = document.getElementById("passwordLength");
let valueLength = 0;
const copyButton = document.getElementById("copy");
const form = document.getElementById("form");

const types = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789",
  symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
};

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
  let upperCaseCheck = document.getElementById("upperCase").checked;
  let lowerCaseCheck = document.getElementById("lowerCase").checked;
  let numbersCheck = document.getElementById("numbers").checked;
  let symbolsCheck = document.getElementById("symbols").checked;
  const passwordGenerate = document.getElementById("passwordGenerated");

  if (upperCaseCheck + lowerCaseCheck + numbersCheck + symbolsCheck === 0) {
    alert("No option checked");
    return;
  }

  let length = document.getElementById("length");
  let password = "";

  while (password.length < length.value) {
    let randomPas = include[Math.floor(Math.random() * include.length)];
    let isChecked = document.getElementById(randomPas.name).checked;
    if (isChecked) {
      password += randomPas();
      console.log(password);
    }
  }
  passwordGenerated.innerHTML = password;
};

const toClipboard = (e) => {
  e.preventDefault();
  let copyText = document.getElementById("passwordGenerated").innerText;
  navigator.clipboard.writeText(copyText);
  console.log("register");
};

const checkStrength = () => {
  const checkBoxes = document.querySelectorAll(".check");
  let value = 0;

  checkBoxes.forEach((box) => {
    if (box.checked === true) {
      value++;
    }
  });
  giveStrength(value);
};

const giveStrength = (value) => {
  let text = document.getElementById("passwordGenerated").innerText.length;
  if (text > 12 && value > 3) {
    strong();
  } else if (text > 8 && text < 12 && value > 2) {
    medium();
  } else {
    weak();
  }
};

const strong = () => {
  const strength = document.querySelectorAll(".strength");
  const strengthIndicator = document.querySelector(".strengthIndicator");
  const strengthLoop = strength.forEach((strengthBlock, index) => {
    strengthBlock.classList.add("hard");
  });
  strengthIndicator.innerHTML = "Strong";
};

const medium = () => {
  const strength = document.querySelectorAll(".strength");
  const strengthIndicator = document.querySelector(".strengthIndicator");
  const strengthLoop = strength.forEach((strengthBlock, index) => {
    if (index < 3) {
      strengthBlock.classList.add("medium");
    }
  });
  strengthIndicator.innerHTML = "Medium";
};

const weak = () => {
  const strength = document.querySelectorAll(".strength");
  const strengthIndicator = document.querySelector(".strengthIndicator");
  const strengthLoop = strength.forEach((strengthBlock, index) => {
    if (index < 1) {
      strengthBlock.classList.add("easy");
    }
  });
  strengthIndicator.innerHTML = "Low";
};

const submit = (e) => {
  e.preventDefault();
  generatePassword();
  checkStrength();
};

copyButton.addEventListener("click", toClipboard);
form.addEventListener("submit", submit);
