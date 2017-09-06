import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Card extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>{this.props.number}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: 'white',
    height: 70,
    width: 50,
    marginHorizontal: 5,
  },
  cardText: {
    color: 'blue',
    fontSize: 18,
  }
});