// Set Random Number
export const ASSIGN_RANDOM_NUMBER = 'ASSIGN_RANDOM_NUMBER';
export const assignRandomNumber = randomNumber => ({
    type: ASSIGN_RANDOM_NUMBER,
    randomNumber
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
export const feedback = (userGuess, randomNumber, giveFeedback) => ({
    type: FEEDBACK,
    userGuess,
    randomNumber,
    giveFeedback
});

// Display # Of Guesses
export const NUMBER_OF_GUESSES = 'NUMBER_OF_GUESSES';
export const numberOfGuesses = guesses => ({
    type: NUMBER_OF_GUESSES,
    guesses
});

// Win Feedback
export const DID_WIN = 'DID_WIN';
export const didWin = (userGuess, randomNumber, winFeedback) => ({
    type: DID_WIN,
    userGuess,
    randomNumber,
    winFeedback
});
