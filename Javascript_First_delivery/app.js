function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkGuess(userNumber, secretNumber) {
    if (userNumber < secretNumber) {
        alert("El número secreto es mayor. ¡Intenta de nuevo!");
        return false;
    } else if (userNumber > secretNumber) {
        alert("El número secreto es menor. ¡Intenta de nuevo!");
        return false;
    } else {
        alert("¡Felicitaciones! Adivinaste el número.");
        return true;
    }
}

let secretNumber;
let guessed;

function startGame() {
    secretNumber = generateRandomNumber(1, 100);
    guessed = false;

    while (!guessed) {
        const userNumber = parseInt(prompt("Adivina el número entre 1 y 100:"));

        if (isNaN(userNumber)) {
            alert("Por favor, ingresa un número válido.");
            continue;
        }
        guessed = checkGuess(userNumber, secretNumber);
    }
}
