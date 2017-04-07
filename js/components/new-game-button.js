import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import * as actions from '../actions/index';

export class NewGameButton extends React.Component {
    constructor(props){
      super(props);
      this.newGame = this.newGame.bind(this);
    }

    newGame(){
      this.props.dispatch(actions.assignRandomNumber());
      console.log('new game has started');
    }

    render() {
      console.log('new game started with: ', store.getState());
      return (
            <button className="newGame" type = "button" onClick = {this.newGame}>
                New Game
            </button>
        );
    }
}

export default connect()(NewGameButton);
