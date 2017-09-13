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
      <TouchableOpacity style={{marginTop:40}}
                        onPress={() => goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
      <View style={{alignItems: 'flex-start'}}>
        <Text style={styles.controlText}>Time For Each Round</Text>
        <View style={{flexDirection: 'row',alignSelf: 'center'}}>
          <TouchableOpacity onPress={this.props.timerDecrement}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text>{this.props.timer}</Text>
          <TouchableOpacity onPress={this.props.timerIncrement}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>


        <Text style={styles.controlText}>Players</Text>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <TouchableOpacity onPress={this.props.playersDecrement}>
          <Text>-</Text>
          </TouchableOpacity>
          <Text>{this.props.players}</Text>
          <TouchableOpacity onPress={this.props.playersIncrement}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.controlText}>Cards</Text>
        <View style={{flexDirection: 'row', alignSelf: 'center'}}>
          <TouchableOpacity onPress={this.props.cardsDecrement}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text>{this.props.cards}</Text>
          <TouchableOpacity onPress={this.props.cardsIncrement}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={{alignSelf: 'center'}} onPress={this.props.reset}>
        <Text>Reset to default</Text>
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
    fontWeight: "700",
    color: 'white',
    fontSize: 25,
  },
});

