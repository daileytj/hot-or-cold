import * as actions from '../actions/index';

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
