// Start Actions

// New Game
export const NEW_GAME = 'NEW_GAME';
export const newGame = randomNumber => ({type: NEW_GAME randomNumber});

// User Guess
export const GUESS = 'GUESS';
export const guess = userGuess => ({type: GUESS, userGuess});

// Test Guess Against Random Number
export const TEST_EQUAL = 'TEST_EQUAL';
export const testEqual = (userGuess, randomNumber) => ({type: TEST_EQUAL, userGuess, randomNumber});

// Display # Of Guesses
export const NUMBER_OF_GUESSES = 'NUMBER_OF_GUESSES';
export const numberOfGuesses = guesses => ({
    type: NUMBER_OF_GUESSES,
    guesses
});

// Game Over?
export const GAME_OVER = 'GAME_OVER';
export const gameOver = (userGuess, randomNumber) => ({
    type: GAME_OVER,
    userGuess,
    randomNumber
});

// Finishing Actions

// Start Reducers
const initialState = {
    randomNumber: Math.floor((Math.random() * 100) + 1),
    guesses: [],
    numberOfGuesses: 0,
    difference: 100,
    gameOver: 0
}

export const reducer = (state = initialState, action) => {
    if (action.type === actions.NEW_GAME) {
        // set random number at start of new game
        return {
            randomNumber: Math.floor((Math.random() * 100) + 1),
            guesses: [],
            numberOfGuesses: 0,
            difference: 100,
            gameOver: false
        }
    } else if (action.type === actions.GUESS) {
        //push users guess into guesses array
        return {
            randomNumber: state.randomNumber,
            guesses: [
                ...state.guesses,
                action.userGuess
            ],
            numberOfGuesses: state.numberOfGuesses,
            difference: state.difference,
            gameOver: state.gameOver
        }
    } else if (action.type === actions.TEST_EQUAL) {
        // take most recent guess and compare against randomNumber

        return {
            randomNumber: state.randomNumber,
            guesses: [
                ...state.guesses
            ],
            numberOfGuesses: state.numberOfGuesses,
            difference: Math.abs(action.randomNumber - action.userGuess),
            gameOver: state.gameOver
        }
    }
    else if (action.type === actions.NUMBER_OF_GUESSES){
        // increment numberOfGuesses
        return {
            randomNumber: state.randomNumber,
            guesses: [
                ...state.guesses
            ],
            numberOfGuesses: state.numberOfGuesses + 1,
            difference: state.difference,
            gameOver: state.gameOver
        }
    }
    else if (action.type === actions.GAME_OVER){
        return {
            randomNumber: state.randomNumber,
            guesses: [
                ...state.guesses
            ],
            numberOfGuesses: state.numberOfGuesses,
            difference: state.difference,
            gameOver: ((action.userGuess - action.randomNumber) === 0) ? true : false 
        }
    }

    return state;
}

// Finishing Reducers
