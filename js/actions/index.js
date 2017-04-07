// Set Random Number
export const ASSIGN_RANDOM_NUMBER = 'ASSIGN_RANDOM_NUMBER';
export const assignRandomNumber = () => ({
    type: ASSIGN_RANDOM_NUMBER
});

// User Guess
export const GUESS = 'GUESS';
export const guess = userGuess => ({
    type: GUESS,
    userGuess
});

// Test Guess Against Random Number
export const TEST_EQUAL = 'TEST_EQUAL';
export const testEqual = (userGuess, randomNumber) => ({
    type: TEST_EQUAL,
    userGuess,
    randomNumber
});

// Give Feedback
export const FEEDBACK = 'FEEDBACK';
export const feedback = (userGuess, randomNumber) => ({
    type: FEEDBACK,
    userGuess,
    randomNumber
});

// Display # Of Guesses
export const NUMBER_OF_GUESSES = 'NUMBER_OF_GUESSES';
export const numberOfGuesses = () => ({
    type: NUMBER_OF_GUESSES
});

// Game Over?
export const GAME_OVER = 'GAME_OVER';
export const gameOver = (userGuess, randomNumber) => ({
    type: GAME_OVER,
    userGuess,
    randomNumber
});
