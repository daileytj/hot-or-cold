require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';
import * as actions from './actions/index';
import store from './store';
import Game from './components/game';

ReactDOM.render(
        <Game />,
        document.getElementById('app')
    )

// console.log("initial state:", store.getState());
//
// store.dispatch(actions.guess('4'));
// console.log("guess 4:", store.getState());
//
// store.dispatch(actions.testEqual(4, store.getState().randomNumber));
// console.log("test equal 4 and random number:", store.getState());
//
// store.dispatch(actions.numberOfGuesses('4'));
// console.log("number of guesses:", store.getState());
