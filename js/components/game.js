import React from 'react';
import NewGameButton from '../components/new-game-button';
import UserGuessForm from '../components/user-guess-form';
import NumberOfGuesses from '../components/number-of-guesses';
import UserGuessesDisplay from '../components/user-guesses-display';
import Feedback from '../components/feedback';

export default class Game extends React.Component {
    render() {
      return (
            <div className="game">
                <NewGameButton />
                <UserGuessForm />
                <NumberOfGuesses numberOfGuesses = {5} />
                <UserGuessesDisplay userGuesses = {[3,6,9,12]}/>
                <Feedback userGuess = {5} randomNumber = {95}/>
            </div>
        );
    }
}
