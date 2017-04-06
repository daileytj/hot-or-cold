import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import * as actions from '../actions/index';

export class NumberOfGuesses extends React.Component {

    render() {
      return (
            <div className="numberOfGuesses">
              <p>Number Of Guesses: {this.props.numberOfGuesses}</p>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    numberOfGuesses: state.numberOfGuesses
});

export default connect(mapStateToProps)(NumberOfGuesses);
