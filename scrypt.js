const words = ["лопата", "молоко", "дом"];

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function playGame() {
    const maxAttempts = 6;
    let word = getRandomWord();
    let guessedWord = Array(word.length).fill('_');
    let usedLetters = [];
    let attemptsLeft = maxAttempts;
    let win = false;

    function displayGameState() {
        console.log(`Слово: ${guessedWord.join(' ')}`);
        console.log(`Осталось попыток: ${attemptsLeft}`);
        console.log(`Использованные буквы: ${usedLetters.join(', ')}`);
    }

    while (attemptsLeft > 0 && !win) {
        displayGameState();

        let userInput = prompt('Введите букву:').toLowerCase();

        if (userInput.length !== 1 || !/[а-яё]/.test(userInput)) {
            console.log('Пожалуйста, введите одну букву!');
            continue;
        }

        if (usedLetters.includes(userInput)) {
            console.log('Эта буква уже была использована. Попробуйте другую.');
            continue;
        }

        usedLetters.push(userInput);

        if (word.includes(userInput)) {
            for (let i = 0; i < word.length; i++) {
                if (word[i] === userInput) {
                    guessedWord[i] = userInput;
                }
            }

            if (!guessedWord.includes('_')) {
                win = true;
            }
        } else {
            attemptsLeft--;
            console.log(`Буквы "${userInput}" нет в слове.`);
        }
    }


    if (win) {
        console.log(`Поздравляем! Вы угадали слово: ${word}`);
    } else {
        console.log(`Вы проиграли. Загаданное слово было: ${word}`);
    }

    let playAgain = prompt('Хотите сыграть снова? (да/нет)').toLowerCase();
    if (playAgain === 'да') {
        playGame();
    } else {
        console.log('Спасибо за игру!');
    }
}
playGame();
