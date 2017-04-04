import React from 'react';

export default class NumberOfGuesses extends React.Component {
    render() {
      return (
            <div className="numberOfGuesses">
              <p>Number Of Guesses: {this.props.numberOfGuesses}</p>
            </div>
        );
    }
}
