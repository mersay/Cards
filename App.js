import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AppRegistry } from 'react-native';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import { Provider, connect } from 'react-redux';

import { createStore } from 'redux';
import reducers from './Reducers';
import Settings from './Components/Settings';
import Game from './Components/Game';
import Home from './Components/Home'

const AppNavigator = StackNavigator({
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
});

const store = createStore(reducers);

class Main extends React.Component {
  render() {
    const {dispatch, nav} = this.props;
    const navigation = addNavigationHelpers({
      dispatch,
      state: nav,
    });
    return (
      <AppNavigator navigation={navigation} />
    );
  }
}

const mapStateToProps = (state) => ({
  nav: state.nav //props Nav is mapped to state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(Main);

export default class App extends React.Component {
  constructor() {
    super();

  }

  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82CAFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
