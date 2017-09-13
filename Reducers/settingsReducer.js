/**
 * Created by MercedesLo on 2017-08-30.
 */

function settingsReducer(state, action){

  let initialState = {
      players: 5,
      cards: 10,
      timer: 10,
  };

  if (typeof state === 'undefined') {
     return initialState
  }

  switch(action.type) {
    case 'PLAYERS_INCREMENT' :
        console.log("+++++ players")

        return Object.assign({}, state, {
        players: state.players + 1
      });
    case 'PLAYERS_DECREMENT' :
        console.log("-- players")

        return Object.assign({}, state, {
        players: (state.players - 1) < 2 ? 2 : state.players - 1
      });
    case 'TIMER_INCREMENT' :
    console.log("+++++  timer")
      return Object.assign({}, state, {
        timer: state.timer + 1
      });
    case 'TIMER_DECREMENT' :
        console.log("--- timer")
        return Object.assign({}, state, {
        timer: (state.timer - 1) <= 1 ? 1 : state.timer - 1
      });
    case 'CARDS_INCREMENT' :
        console.log("++ cards")
        return Object.assign({}, state, {
        cards: state.cards + 1
      });
    case 'CARDS_DECREMENT' :

    console.log("-- cards")
      return Object.assign({}, state, {
        cards: (state.cards - 1) <= 5 ? 5 : state.cards - 1
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

export default settingsReducer;
