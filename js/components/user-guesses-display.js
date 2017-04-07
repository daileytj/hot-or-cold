import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import store from '../store';

export class UserGuessesDisplay extends React.Component {
     render() {
      let i = 0
      const userGuessesArray = this.props.guesses.map(guess => {
            i += 1;
            return <p key = {i}> {guess} </p>;
        });
      return (
            <div className="userGuessesArray">
              {userGuessesArray}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    guesses: state.guesses
});

export default connect(mapStateToProps)(UserGuessesDisplay);
