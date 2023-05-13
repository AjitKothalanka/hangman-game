// Define the word list
var words = [
    "javascript",
    "python",
    "hangman",
    "computer",
    "programming",
    "code",
    "github"
];

// Choose a random word
var word = words[Math.floor(Math.random() * words.length)];

// Define the initial guesses
var guesses = [];

// Define the number of wrong guesses allowed
var maxWrongGuesses = 6;

// Define the wrong guesses count
var wrongGuesses = 0;

// Define the Hangman image sources
var hangmanImages = [
    "img/hangman0.png",
    "img/hangman1.png",
    "img/hangman2.png",
    "img/hangman3.png",
    "img/hangman4.png",
    "img/hangman5.png",
    "img/hangman6.png"
];

// Load the Hangman images
var hangmanImageObjects = [];
for (var i = 0; i < hangmanImages.length; i++) {
    var image = new Image();
    image.src = hangmanImages[i];
    hangmanImageObjects.push(image);
}

// Get the canvas element and its context
var canvas = document.getElementById("hangman");
var context = canvas.getContext("2d");

// Draw the Hangman image
function drawHangman() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(hangmanImageObjects[wrongGuesses], 0, 0, canvas.width, canvas.height);
}

// Draw the word blanks and letters
function drawWord() {
    var wordElement = document.getElementById("word");
    var wordString = "";
    for (var i = 0; i < word.length; i++) {
        var letter = word[i];
        if (guesses.indexOf(letter) != -1) {
            wordString += "<span class='letter'>" + letter + "</span>";
        } else {
            wordString += "<span class='letter'>_</span>";
        }
    }
    wordElement.innerHTML = wordString;
}

// Draw the used guesses
function drawGuesses() {
    var guessesElement = document.getElementById("guesses");
    var guessesString = "Used letters: ";
    for (var i = 0; i < guesses.length; i++) {
        guessesString += "<span class='letter used'>" + guesses[i] + "</span>";
    }
    guessesElement.innerHTML = guessesString;
}

// Check
