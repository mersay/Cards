/**
 * Created by MercedesLo on 2017-08-29.
 */

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Settings extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {state, goBack, settings} = this.props.navigation;
    console.log(this.props.navigation);
    return (
    <View style={styles.container}>
      <TouchableOpacity style={{marginTop:40, marginLeft: 20}}
                        onPress={() => goBack()}>
        <Text style={styles.back}>Back</Text>
      </TouchableOpacity>
      <View style={{alignItems: 'flex-start'}}>
        <Text style={styles.controlText}>Time For Each Round</Text>
        <View style={{flexDirection: 'row',alignSelf: 'center'}}>
          <TouchableOpacity onPress={this.props.timerDecrement}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={[styles.buttonText,{marginHorizontal: 10}]}>{this.props.timer}</Text>
          <TouchableOpacity onPress={this.props.timerIncrement}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>


        <Text style={styles.controlText}>Players</Text>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <TouchableOpacity onPress={this.props.playersDecrement}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={[styles.buttonText,{marginHorizontal: 10}]}>{this.props.players}</Text>
          <TouchableOpacity onPress={this.props.playersIncrement}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.controlText}>Cards</Text>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <TouchableOpacity onPress={this.props.cardsDecrement}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <Text style={[styles.buttonText,{marginHorizontal: 10}]}>{this.props.cards}</Text>
          <TouchableOpacity onPress={this.props.cardsIncrement}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={{alignSelf: 'center', marginTop: 15}} onPress={this.props.reset}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>
    </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82CAFF',
  },
  controlText: {
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: "500",
    color: 'white',
    fontSize: 25,
    marginTop: 15,
    marginVertical:5
  },
  buttonText: {
    color: 'white',
    fontSize : 25,
    fontWeight: '800',
    marginVertical:5,
  },
  back:{
    color: 'white',
    fontSize : 15,
    fontWeight: '500'
  }
});

