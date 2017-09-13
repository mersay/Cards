/**
 * Created by MercedesLo on 2017-08-29.
 */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Card from './Card.js';
import helper from '../helper';

let numberOfRows = 4;
let numberOfCardsForEachPlayer = 10;
//let numberOfPlayers = 4//getRandomIntInclusive(4,10);
//let playersCowHeads = Array.from({length:numberOfPlayers},(v,i) => 0);
//let players = Array.from({length: numberOfPlayers}, (v, i) => new Array());
let cards = Array.from({length: 104}, (v, i) => v = {value: i+1, cowHeads: 0});
let rows =  Array.from({length: numberOfRows}, (v, i) => new Array(0));
let round = [];

//last player is me

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cowHeads : 0,
      timer: this.props.timer,
      numOfPlayers: this.props.players,
      numOfCards : this.props.cards,
      playerCowHeads :  Array.from({length: this.props.players},(v,i) => 0),
      playerCards: Array.from({length: this.props.players}, (v, i) => new Array()),
    }
  }

  componentWillMount(){
    this.newGame();
  }

  newGame() {
      //clear data
      round = [];
      this.setState({
          playerCowHeads :  Array.from({length: this.props.players}, (v,i) => 0),
          playerCards: Array.from({length: this.props.players}, (v, i) => new Array()),
      });

      //assignCowHeads
      cards.forEach((card) => {
          card.cowHeads = helper.giveCowHeads(card.value)
      });

      let playerCards = Array.from({length: this.props.players}, (v, i) => new Array());

      //give cards to players
      for (var i = 0; i < this.state.numOfPlayers; i++) {
          for (var j = 0; j < this.state.numOfCards; j++) {
              let len = cards.length;
              let rand = helper.getRandomIntInclusive(0, len - 1);
              playerCards[i].push(cards[rand]);
              cards.splice(rand, 1);
          }
      }

      playerCards.forEach((arr) => arr.sort(function (a, b) {
          return a.value - b.value;
      }));

      //put one card to each row
      for (var row = 0; row < numberOfRows; row++) {
          //reuse!!
          let len = cards.length;
          let rand = helper.getRandomIntInclusive(0, len - 1);
          rows[row][0] = cards[rand];
          cards.splice(rand, 1);
      }

      //debug
      //console.log("number of players:", numberOfPlayers, playersCards, "cards left", cards, "rows", rows, "players' cards", players);
      this.setState({playerCards : playerCards});
      //TODO: select row with less cowHeads done
      //TODO: timer to select a random row
      //TODO: let player select a row if smallest
  }

  playARound(cardInd){
    console.log("play a round", cardInd);
    let playerCards = this.state.playerCards.slice();
    //for each player, select a random card from their hand of cards,
      let me = this.state.numOfPlayers - 1;

      for(var j= 0; j < me; j++) { //-1 because player picks own card
        let len = playerCards[j].length;
        let rand = helper.getRandomIntInclusive(0,len-1);
        round[j] = playerCards[j][rand];
        playerCards[j].splice(rand, 1);

      }

    round[me] = playerCards[me][cardInd];
    playerCards[me].splice(cardInd,1);

    this.findOrderOfRound(round, playerCards);
    this.setState({playerCards: playerCards});

  }

  async findOrderOfRound(rd, allCards) {
    console.log("round",rd);
    let order = rd.slice();  //dont use order = round because referring to same address
    // console.log("r",round,"o",order);
    order.sort((a,b) => {return a.value - b.value});
    for (let card of order) {
        await this.putCard(helper.findPlayerOfCard(card,rd) , card, allCards)
    }
  }

  putCard(player,card, allCards) {
      console.log("staste is",this.state);
      //arr.sort(function(a, b) { return a - b; });

      let smallerThanAllRows = false;
      let rowToPut = 0;
      //get all last card of each row out and get smallest difference
      let diffArray = [];

      for (let row of rows) {
            //get last card of every row
            diffArray.push(card.value - row.slice(-1)[0].value);
      }

      if (diffArray.filter((a,b) => a>0).length == 0) smallerThanAllRows = true;
      let playerCowHeads = this.state.playerCowHeads.slice();

      if (smallerThanAllRows) {

          let cowHeadsOfRows = [];
          for (let row of rows) {
              cowHeadsOfRows.push(helper.countCowHeads(row));
          }
          rowToPut = cowHeadsOfRows.indexOf(Math.min(...cowHeadsOfRows));
          playerCowHeads[player] += helper.countCowHeads(rows[rowToPut]);
          rows[rowToPut] = [];
          this.setState({playerCowHeads: playerCowHeads});

      } else {
          diffArray = diffArray.map((a) => a < 0 ? 104 : a);
          rowToPut = diffArray.indexOf(Math.min(...diffArray));
          if (rows[rowToPut].length == 5) {
              playerCowHeads[player] += helper.countCowHeads(rows[rowToPut]);
              rows[rowToPut] = [];
              this.setState({playerCowHeads: playerCowHeads});
          }

      }
      rows[rowToPut].push(card);
  }



  render() {
    const {goBack} = this.props.navigation;
    return (
      <View style={styles.container}>

        <View style={[styles.row,{marginTop: 20,justifyContent: 'space-between'}]}>
          <TouchableOpacity onPress={() => goBack()}>
            <Text style={styles.back}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.newGame()}>
            <Text style={styles.back}>New</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.back}>
              CowHeads: {this.state.cowHeads}
            </Text>
          </View>

        </View>
        <View>
          <TouchableOpacity style={[styles.row, {backgroundColor: 'orange'}]}>
            {rows[0].map((card,i) => <Card key={i} number={card.value}></Card>)}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.row, {backgroundColor: 'pink'}]}>
            {rows[1].map((card,i) => <Card key={i} number={card.value}></Card>)}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.row, {backgroundColor: 'grey'}]}>
            {rows[2].map((card,i) => <Card key={i} number={card.value}></Card>)}
          </TouchableOpacity>
          <TouchableOpacity style={[styles.row, {backgroundColor: 'yellow'}]}>
            {rows[3].map((card,i) => <Card key={i} number={card.value}></Card>)}
          </TouchableOpacity>
        </View>
        <View style={{height:70}}>
          <ScrollView directionalLockEnabled={true}
                      horizontal={true}
                      style={[styles.playersCards,{backgroundColor: 'purple'}]}>
              {this.state.playerCards[this.state.numOfPlayers-1].map((card,i) => <Card key={i} ind={i} number={11} onPress={this.playARound(i)}></Card>)}

          </ScrollView>
        </View>
        <View style={{marginTop: 20, flexDirection: 'row', marginHorizontal:10, justifyContent: 'space-between'}}>
          <Text style={[styles.timer]}>Timer: {this.state.timer}</Text>
          <Text style={[styles.back]}>Player: {this.state.numOfPlayers}</Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#82CAFF',
  },
  row: {
    flexDirection : 'row',
    justifyContent: 'flex-start',
    borderRadius: 3,
    marginVertical: 10,
    padding:10,

  },
  playersCards: {
    borderRadius: 3,
    padding: 10,
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
  },
  back:{
    color: 'white',
    fontSize : 15,
    fontWeight: '500'
  },
  timer:{
    color: 'white',
    fontSize:20,
    fontWeight: '500'
  }
});
