import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AppRegistry } from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { Provider, connect } from 'react-redux';

import { createStore, combineReducers } from 'redux';
import reducers from './Reducers';
import Settings from './Containers/SettingsContainer';
import Game from './Containers/GameContainer';
import Home from './Components/Home'
//import settingsReducer from "./Reducers/settingsReducer";


const StackRoutes = {
    Home : { screen : Home,
        navigationOptions: {
            header:(<View style={{height:0, marginTop:0}}></View>)
        },
    },
    Game: { screen: Game,
        navigationOptions: {
            header:(<View style={{height:0, marginTop:0}}></View>),
            gesturesEnabled: false,
        },
    },
    Settings: { screen: Settings,
        navigationOptions: {
            header:(<View style={{height:0, marginTop:0}}></View>),
            gesturesEnabled: false,
        },},
}

const AppNavigator = StackNavigator(StackRoutes, {initialRouteName :'Home' });

//wrapping Main with navigation
class Main extends React.Component {
  render() {
    const {dispatch, nav, settings} = this.props; //THIS
    const navigation = addNavigationHelpers({
      dispatch : dispatch,
      state: nav,
      settings: settings //settings is undefined
    });
    return (
      <AppNavigator navigation={navigation} />
    );
  }
}

const mapStateToProps = (state) => ({
    nav: state.nav, //giving state.nav to props.nav //THIS
    settings: state.settings //giving
});

const RootNavigator = connect(mapStateToProps)(Main);

const navReducer = (state, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    // Simply return the original `state` if `nextState` is null or undefined.
    return nextState || state;
};

const appReducer = combineReducers({
    nav: navReducer,
    settings: reducers.settingsReducer,
});


const store = createStore(appReducer);

//App(Redux) -> RootNavigator(Navigation)

export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

