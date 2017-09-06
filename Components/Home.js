import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Navigator } from 'react-native';
import Settings from './Settings';
import Game from './Game';



export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      cowHeads : 0,
      timer: 10,
      players: 4,
      cards: 10,
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('Game')}
            style={[{marginTop:10}]}>
            <Text style={styles.statsText}>
              New
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={[{marginTop:10}]}>
            <Text style={styles.statsText}>
              Instructions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('Settings', {players: this.state.players, cards: this.state.cards, timer: this.state.timer})}
                            style={[{marginTop:10}]}>
            <Text style={styles.statsText}>
              Settings
            </Text>
          </TouchableOpacity>
        </View>
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
  statsText:{
    fontSize: 25,
    color: 'white',
    fontWeight: "600",
  }
});
/**
 * Created by MercedesLo on 2017-08-29.
 */
