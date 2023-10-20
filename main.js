// Sélectionnez les éléments du DOM
const display = document.getElementById("calDisplay");
const numButtons = document.querySelectorAll(".numButton");
const operatorButtons = document.querySelectorAll(".button");

// Variables pour stocker les données
let currentNumber = "";
let firstNumber = null;
let operator = null;

// Fonction pour mettre à jour l'affichage
function updateDisplay() {
  display.textContent = currentNumber || "0";
}

// Fonction pour gérer les clics sur les boutons numériques
numButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentNumber === "0" || !currentNumber) {
      currentNumber = button.textContent;
    } else {
      currentNumber += button.textContent;
    }
    updateDisplay();
  });
});

// Fonction pour gérer les clics sur les boutons d'opérateurs
operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentNumber !== null) {
      if (firstNumber === null) {
        firstNumber = parseFloat(currentNumber);
        currentNumber = "";
        operator = button.textContent;
      } else {
        const secondNumber = parseFloat(currentNumber);
        switch (operator) {
          case "+":
            firstNumber += secondNumber;
            break;
          case "-":
            firstNumber -= secondNumber;
            break;
          case "*":
            firstNumber *= secondNumber;
            break;
          case "/":
            firstNumber /= secondNumber;
            break;
        }
        operator = button.textContent;
        currentNumber = "";
        updateDisplay();
      }
    }
  });
});

// Gérer le bouton "="
document.getElementById("=").addEventListener("click", () => {
  if (firstNumber !== null && currentNumber !== "") {
    const secondNumber = parseFloat(currentNumber);
    switch (operator) {
      case "+":
        firstNumber += secondNumber;
        break;
      case "-":
        firstNumber -= secondNumber;
        break;
      case "*":
        firstNumber *= secondNumber;
        break;
      case "/":
        firstNumber /= secondNumber;
        break;
    }
    currentNumber = firstNumber.toString();
    firstNumber = null;
    operator = null;
    updateDisplay();
  }
});

// Gérer le bouton "C" (effacer)
document.getElementById("C").addEventListener("click", () => {
  currentNumber = "";
  firstNumber = null;
  operator = null;
  updateDisplay();
});

// Initialiser l'affichage
updateDisplay();
