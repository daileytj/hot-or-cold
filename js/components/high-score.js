import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import store from '../store';

export class HighScore extends React.Component {
    constructor(props){
        super(props);
    }

    componentWillReceiveProps() {
        // if (this.props.gameOver && this.props.gameOver === this.props.numberOfGuesses) {
        //     alert('pleeeeeeeeeease');
        // }
        // I don't like that I'm "directly" accessing state, here, but
        // mapStateToProps isn't up to date
        const state = store.getState();
        if (state.gameOver && state.gameOver === state.numberOfGuesses) {
            this.props.dispatch(actions.putHighScore(this.props.numberOfGuesses + 1));
        }
    }

    componentDidMount() {
        this.props.dispatch(actions.getHighScore());
    }

    render() {
        let text = this.props.highScore ?
                `Best score: ${this.props.highScore}` : '';
        return (
            <div className="best-score">
              <p>{text}</p>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    // I don't use `gameOver` nor `numberOfGuesses`, but without them,
    // componentWillReceiveProps won't update
    highScore: state.highScore,
    gameOver: state.gameOver,
    numberOfGuesses: state.numberOfGuesses
});

export default connect(mapStateToProps)(HighScore);
