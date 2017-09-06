/**
 * Created by MercedesLo on 2017-08-30.
 */

import {combineReducers} from 'redux'

function settingsReducer(state = {}, action){

  if (typeof state === 'undefined') {
    state = {
      players: 4,
      cards: 10,
      timer: 10,
    }; // If state is undefined, initialize it with a default value OR we can define it as initialState
  }

  switch(action.type) {
    case 'PLAYERS_INCREMENT' :
      return Object.assign({}, state, {
        players: state.players + 1
      });
    case 'PLAYERS_DECREMENT' :
      return Object.assign({}, state, {
        players: state.players - 1
      });
    case 'TIMER_INCREMENT' :
      return Object.assign({}, state, {
        timer: state.timer + 1
      });
    case 'TIMER_DECREMENT' :
      return Object.assign({}, state, {
        timer: state.timer - 1
      });
    case 'CARDS_INCREMENT' :
      return Object.assign({}, state, {
        cards: state.cards + 1
      });
    case 'CARDS_DECREMENT' :
      return Object.assign({}, state, {
        cards: state.cards - 1
      });
    case 'RESET' :
      return Object.assign({}, state, {
        cards: 10,
        players: 4,
        timer: 10
      });
    default:
      return state;
  }
}

export default combineReducers({
  settingsReducer,
})
