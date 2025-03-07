const secretWord = "elma"; // Tahmin edilecek kelime

function checkGuess() {
    const userGuess = document.getElementById("guessInput").value.toLowerCase();
    const resultText = document.getElementById("result");

    if (userGuess === secretWord) {
        resultText.innerHTML = "Tebrikler! Doğru tahmin ettin 🎉";
        resultText.style.color = "green";
    } else {
        resultText.innerHTML = "Yanlış tahmin, tekrar dene!";
        resultText.style.color = "red";
    }
}
