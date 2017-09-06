import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Settings from '../Components/Settings';

const mapStateToProps = state => ({
  players: state.players,
  cards : state.cards,
  timer : state.timer,
})

const mapDispatchToProps = (dispatch) => ({
  playersIncrement: () => { dispatch({ type: 'PLAYERS_INCREMENT' }) },
  playersDecrement: () => { dispatch({ type: 'PLAYERS_DECREMENT' }) },
  cardsIncrement: () => { dispatch({ type: 'CARDS_INCREMENT' }) },
  cardsDecrement: () => { dispatch({ type: 'CARDS_DECREMENT' }) },
  timerIncrement: () => { dispatch({ type: 'TIMER_INCREMENT' }) },
  timerDecrement: () => { dispatch({ type: 'TIMER_DECREMENT' }) },
  reset: () => { dispatch({ type: 'RESET' }) },
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings)/**
 * Created by MercedesLo on 2017-08-30.
 */
