/**
 * Created by MercedesLo on 2017-08-29.
 */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Card from './Card.js';

export default class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      cowHeads : 0,
      timer: 10,
    }
  }

  render() {
    const {goBack} = this.props.navigation;
    return (
      <View style={styles.container}>

        <View style={[styles.row,{marginTop: 15,justifyContent: 'space-between',alignItems: 'center'}]}>
          <TouchableOpacity onPress={() => goBack()}>
            <Text style={styles.statsText}>BACK</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.statsText}>
              CowHeads: {this.state.cowHeads}
            </Text>
          </View>

        </View>
        <View>
          <TouchableOpacity style={[styles.row, {backgroundColor: 'orange'}]}>
            <Card number={1}></Card>
            <Card number={2}></Card>
            <Card number={3}></Card>
            <Card number={6}></Card>
            <Card number={8}></Card>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.row, {backgroundColor: 'pink'}]}>
            <Card number={66}></Card>
            <Card number={94}></Card>
            <Card number={102}></Card>
            <Card number={5}></Card>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.row, {backgroundColor: 'grey'}]}>
            <Card number={11}></Card>
            <Card number={24}></Card>
            <Card number={57}></Card>
            <Card number={5}></Card>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.row, {backgroundColor: 'yellow'}]}>
            <Card number={13}></Card>
          </TouchableOpacity>
        </View>
        <View style={{height:100}}>
          <ScrollView directionalLockEnabled={true}
                      horizontal={true}
                      style={[styles.playersCards,{backgroundColor: 'purple'}]}>
            <Card number={11}></Card>
            <Card number={24}></Card>
            <Card number={57}></Card>
            <Card number={5}></Card>
            <Card number={11}></Card>
            <Card number={24}></Card>
            <Card number={57}></Card>
            <Card number={5}></Card>

          </ScrollView>
        </View>
        <View>
          <Text style={[styles.statsText, {marginTop:10}]}>
            Timer: {this.state.timer}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82CAFF',
    alignItems: 'center',
  },
  row: {
    flexDirection : 'row',
    justifyContent: 'flex-start',
    borderRadius: 3,
    marginVertical: 10,
    padding:10,

  },
  playersCards: {
    marginTop: 5,
    borderRadius: 3,
    padding:10,
    flex:1,
  },
  controls: {
    alignSelf:'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  controlText: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsText:{
    fontSize: 25,
    color: 'white',
    fontWeight: "600",
  }
});
