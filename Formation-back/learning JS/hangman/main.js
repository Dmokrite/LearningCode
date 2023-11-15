document.addEventListener("DOMContentLoaded", function() {
    const wordDisplay = document.getElementById('word-display');
    const chancesDisplay = document.getElementById('chances');
    const guessesDisplay = document.getElementById('guesses');
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');
    const hangmanImage = document.getElementById('hangman-image');

    let wordToGuess = '';
    let guessedWord = [];
    let incorrectGuesses = [];
    let chancesLeft = 7;
    let gameEnded = false;

    async function fetchRandomWord() {
        const response = await fetch('https://random-word-api.herokuapp.com/word?number=1');
        const data = await response.json();
        console.log(data[0]);
        return data[0];
    }

    function displayWord() {
        wordDisplay.textContent = guessedWord.join(' ').toUpperCase();
    }

    function displayChances() {
        chancesDisplay.textContent = `Remaining chances: ${chancesLeft}`;
    }

    function displayGuesses() {
        guessesDisplay.innerHTML = `<p>Last wrong letters: </p><span class="guesse">${incorrectGuesses.join(', ').toUpperCase()}</span>`;
    }

    function updateHangmanImage() {
        const imageIndex = 6 - chancesLeft;
        hangmanImage.src = `img/hangman-${imageIndex}.png`;
    }

    function initializeGame() {
        fetchRandomWord().then(word => {
            wordToGuess = word.toLowerCase();
            guessedWord = Array(wordToGuess.length).fill('_');
            incorrectGuesses = [];
            chancesLeft = 7;
            gameEnded = false;

            displayWord();
            displayChances();
            displayGuesses();

            hangmanImage.src = 'img/hangman-0.png';
            guessInput.disabled = false;
            guessInput.value = '';
        });
    }

    function makeGuess() {
        if (gameEnded) return;

        const guess = guessInput.value.toLowerCase();
        const messageElement = document.getElementById('message');

        if (!guess.match(/[a-z]/) || guess.length !== 1) {
            messageElement.textContent = "Please enter a valid letter.";
            return;
        }

        if (guessedWord.includes(guess) || incorrectGuesses.includes(guess)) {
            messageElement.textContent = "You already guessed this letter.";
            guessInput.value = '';
            setTimeout(() => {
                messageElement.textContent = '';
            }, 2000);
            return;
        }

        if (wordToGuess.includes(guess)) {
            wordToGuess.split('').forEach((letter, index) => {
                if (letter === guess) {
                    guessedWord[index] = guess;
                }
            });

            if (!guessedWord.includes('_')) {
                displayResultModal('Congratulations! You found the word.', true);
            }
        } else {
            incorrectGuesses.push(guess);
            chancesLeft--;

            updateHangmanImage();

            if (chancesLeft === 0) {
                displayResultModal(`Sorry, you've exhausted all your chances. The word was "${wordToGuess}".`, false);
            }
        }

        displayWord();
        displayChances();
        displayGuesses();

        guessInput.value = '';
    }

    function displayResultModal(message, isWin) {
        const resultModal = document.getElementById('result-modal');
        const resultModalMessage = document.getElementById('result-modal-message');
        const resultModalClose = document.getElementById('result-modal-close');

        resultModalMessage.textContent = message;
        resultModal.style.display = 'block';

        resultModal.classList.remove(!isWin ? 'modal-win' : 'modal-lose');
        resultModal.classList.add(isWin ? 'modal-win' : 'modal-lose');

        resultModalClose.addEventListener('click', function() {
            resultModal.style.display = 'none';
            initializeGame();
        });

        window.addEventListener('click', function(event) {
            if (event.target == resultModal) {
                resultModal.style.display = 'none';
                initializeGame();
            }
        });

        resultModal.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                resultModal.style.display = 'none';
                initializeGame();
            }
        });

        guessInput.disabled = true;
        gameEnded = true;
        
        guessInput.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                resultModal.style.display = 'none';
                initializeGame();
            }
        });
    }

    initializeGame();

    guessButton.addEventListener('click', makeGuess);

    guessInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            makeGuess();
        }
    });
});
