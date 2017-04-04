import React from 'react';

export default class Feedback extends React.Component {
    render() {
      const userGuess = this.props.userGuess;
      const randomNumber = this.props.randomNumber;
      const difference = Math.abs(userGuess - randomNumber);
      const feedback = difference => {
        if(difference > 100 || difference < 1){return 'guess a number between 1 and 100'}
        else if (difference > 40){return 'Ice-Cold'}
        else if (difference > 30){return 'Cold'}
        else if (difference > 20){return 'Cold-ish'}
        else if (difference > 15){return 'Kinda Toasty a.k.a. Warm'}
        else if (difference > 7){return 'Hot!'}
        else if (difference > 3){return 'Blazing Inferno!'}
        else if (difference > 0){return 'Ahhh, you\'re sooooo close!'}
      }

      return (
            <div className="feedback">
              <p>{feedback}</p>
            </div>
        );
    }
}
