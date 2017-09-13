import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import Game from '../Components/Game';

const mapStateToProps = (state) => {
    return {
        players: state.settings.players,
        cards : state.settings.cards,
        timer : state.settings.timer,
    }
};

export default connect(mapStateToProps)(Game);
/**
 * Created by MercedesLo on 2017-08-30.
 */
