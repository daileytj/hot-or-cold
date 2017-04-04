import React from 'react';

export default class UserGuessesDisplay extends React.Component {
    render() {
      let i = 0
      const userGuessesArray = this.props.userGuesses.map(guess => {
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
