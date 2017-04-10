import React from 'react';
import {connect} from 'react-redux';
import 'isomorphic-fetch';
import NewGameButton from '../components/new-game-button';
import UserGuessForm from '../components/user-guess-form';
import NumberOfGuesses from '../components/number-of-guesses';
import UserGuessesDisplay from '../components/user-guesses-display';
import Feedback from '../components/feedback';
import HighScore from '../components/high-score';

export default class Game extends React.Component {
    render() {
      return (
            <div className="game">
                <NewGameButton />
                <UserGuessForm />
                <NumberOfGuesses/>
                <UserGuessesDisplay/>
                <Feedback/>
                <HighScore />
            </div>
        );
    }
}
