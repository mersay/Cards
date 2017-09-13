import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Settings from '../Components/Settings';

const mapStateToProps = (state) => {
  return {
        players: state.settings.players,
        cards : state.settings.cards,
        timer : state.settings.timer,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        playersIncrement: () => {
            dispatch({type: 'PLAYERS_INCREMENT'})
        },
        playersDecrement: () => {
            dispatch({type: 'PLAYERS_DECREMENT'})
        },
        cardsIncrement: () => {
            dispatch({type: 'CARDS_INCREMENT'})
        },
        cardsDecrement: () => {
            dispatch({type: 'CARDS_DECREMENT'})
        },
        timerIncrement: () => {
            dispatch({type: 'TIMER_INCREMENT'})
        },
        timerDecrement: () => {
            dispatch({type: 'TIMER_DECREMENT'})
        },
        reset: () => {
            dispatch({type: 'RESET'})
        },
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Settings);
/**
 * Created by MercedesLo on 2017-08-30.
 */
