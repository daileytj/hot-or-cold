import * as actions from '../actions/index';

const initialState = {
    randomNumber: Math.floor((Math.random() * 100) + 1),
    guesses: [],
    numberOfGuesses: 0,
    difference: 100,
    gameOver: 0,
    feedback: '',
    highScore: 100
}

export const reducer = (state = initialState, action) => {
    if (action.type === actions.ASSIGN_RANDOM_NUMBER) {
        // set random number at start of new game
        return {
            randomNumber: Math.floor((Math.random() * 100) + 1),
            guesses: [],
            numberOfGuesses: 0,
            difference: 100,
            gameOver: false,
            feedback: 'Guess a number between 1 and 100',
            highScore: 100
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
            gameOver: state.gameOver,
            feedback: state.feedback,
            highScore: action.highScore
        }
    } else if (action.type === actions.TEST_EQUAL) {
        // take most recent guess and compare against randomNumber
        let theDifference = Math.abs(state.randomNumber - action.userGuess);
        return {
            randomNumber: state.randomNumber,
            guesses: [
                ...state.guesses
            ],
            numberOfGuesses: state.numberOfGuesses,
            difference: theDifference,
            gameOver: ((action.userGuess - action.randomNumber) === 0) ? true : false,
            feedback: state.feedback,
            highScore: action.highScore
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
            gameOver: state.gameOver,
            feedback: state.feedback,
            highScore: action.highScore
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
            gameOver: ((action.userGuess - action.randomNumber) === 0) ? true : false,
            feedback: state.feedback,
            highScore: action.highScore
        }
    }
    else if (action.type === actions.FEEDBACK){
        return {
            randomNumber: state.randomNumber,
            guesses: [
                ...state.guesses
            ],
            numberOfGuesses: state.numberOfGuesses,
            difference: state.difference,
            gameOver: state.gameOver,
            feedback: action.feedback,
            highScore: action.highScore
        }
    }
    //high score
    else if (action.type === actions.GET_HIGH_SCORE_SUCCESS){
        return {
            guesses: state.guesses,
            randomNumber: state.randomNumber,
            difference: state.difference,
            gameOver: state.gameOver,
            numberOfGuesses: state.numberOfGuesses,
            feedback: action.feedback,
            highScore: action.highScore
        }
    }

    else if (action.type === actions.PUT_HIGH_SCORE_SYNC){
        return {
            guesses: state.guesses,
            randomNumber: state.randomNumber,
            difference: state.difference,
            gameOver: state.gameOver,
            numberOfGuesses: state.numberOfGuesses,
            feedback: action.feedback,
            highScore: action.highScore
        }
    }

    return state;
}
