import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import store from '../store';

export class Feedback extends React.Component {
    constructor(props){
        super(props);
        this.feedback = 'Guess a number between 1 and 100';
    }

    render() {
      return (
            <div className="feedback">
              <p>{this.props.feedback}</p>
            </div>
        );
    }
}

    const feedback = difference => {
        console.log('difference ',difference);
      let text = '';
      if(store.getState().guesses == 0){text = 'Guess a number between 1 and 100'}
      else if(difference > 100 || difference < 0){text = 'guess a number between 1 and 100'}
      else if (difference > 40){text = 'Ice-Cold'}
      else if (difference > 30){text = 'Cold'}
      else if (difference > 20){text = 'Cold-ish'}
      else if (difference > 15){text = 'Kinda Toasty a.k.a. Warm'}
      else if (difference > 7){text = 'Hot!'}
      else if (difference > 3){text = 'Blazing Inferno!'}
      else if (difference > 0){text = 'Ahhh, you\'re sooooo close!'}
      else {
        text = 'You Win! Press "New Game" to try again';
      }
      console.log('text ',text);
      return text;
    }

    const mapStateToProps = (state, props) => ({
        feedback: feedback(state.difference)
    });



export default connect(mapStateToProps)(Feedback);
