import 'isomorphic-fetch';

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

// High Score

export const GET_HIGH_SCORE_SUCCESS = 'GET_HIGH_SCORE_SUCCESS';
export const getHighScoreSuccess = (highScore) => ({
    type: GET_HIGH_SCORE_SUCCESS,
    highScore
});

export const PUT_HIGH_SCORE_SYNC = 'PUT_HIGH_SCORE_SYNC';
export const putHighScoreSync = (highScore) => ({
    type: PUT_HIGH_SCORE_SYNC,
    highScore
});

export const getHighScore = score => dispatch => {
    const url = 'http://127.0.0.1:8080/fewest-guesses';
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response;
    })
        .then(response => response.json())
        .then(data => {
            dispatch(getHighScoreSuccess(data.highScore));
        })
        .catch(error =>
               console.log(error)
              );
};

export const putHighScore = score => dispatch => {
    const url = 'http://127.0.0.1:8080/fewest-guesses';
    const params = {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({highScore: score})
    };

    return fetch(url, params).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response;
    })
        .then(response => response.json())
        .then(data => {
            dispatch(putHighScoreSync(data.highScore));
        })
        .catch(error =>
               console.log(error)
              );
};
