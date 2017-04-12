import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import store from '../store';

export class UserGuessForm extends React.Component {
    constructor(props){
      super(props);
      this.onButtonClick = this.onButtonClick.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleKeyPress(e){
      if (e.key === 'Enter'){
        this.onButtonClick();
      }
    }

    onButtonClick(){
      const guess = Math.trunc(this.inputField.value.trim());
      // console.log(guess);
      this.props.dispatch(actions.gameOver());
      if (!this.gameOver){
        if(guess > 0 && guess < 101){
          // if(this.props.guesses.indexOf(guess) + 1){
          //   alert(`You've already guessed ${guess}`);
          // }
          // else{
            this.props.dispatch(actions.numberOfGuesses());
            this.props.dispatch(actions.guess(guess));
            this.props.dispatch(actions.testEqual(guess, this.props.randomNumber));
          // }
        }
        else {
          alert('enter a number between 0 and 100');
        }
      }
      this.inputField.value = '';
    }

    render() {
      return (
            <div className="userGuessForm">
              <input type="text" placeholder = 'Enter your guess...' onKeyPress = {this.handleKeyPress} ref = {element => {this.inputField = element; }} autoFocus required/>
              <button className = 'guess-button' type="button" onClick = {this.onButtonClick}>Guess</button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
  gameOver: state.gameOver,
  numberOfGuesses: state.numberOfGuesses,
  guess: state.guess,
  feedback: state.feedback
});

export default connect(mapStateToProps)(UserGuessForm);
