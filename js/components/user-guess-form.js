import React from 'react';

export default class UserGuessForm extends React.Component {
    render() {
      return (
            <div className="userGuessForm">
              <input type="text"/>
              <button type="submit">Guess</button>
            </div>
        );
    }
}
