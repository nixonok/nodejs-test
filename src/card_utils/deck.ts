import { ICard, CardType } from "./icard";
import * as utils from "../utils/utilities";

class GameCard implements ICard {
  CardType: CardType
  Value: Number
}

var cards: Array<GameCard> = new Array<GameCard>();

function Build() {
  var myCards: GameCard[] =  [];
  
  for(var i = 0; i < 4; i++){
    for (var j = 7; j < 15; j++) {
      var card = new GameCard()
      card.CardType = Math.floor(i)
      card.Value = j 
      myCards.push(card)
    }
  }
  
  return myCards;
}

export function Init() {
  console.log("Initializing Deck!!!");
  var cards = Build();
  this.cards = cards;
  return cards;
}

export function DistributeCards(){

  let playerCount = 4, cardCount = 8
  let distributedCards = new Array<Array<GameCard>>()
  for(let i = 0; i < playerCount; i++){
    let a = new Array<GameCard>()
    for(let j = 0; j < cardCount; j++){
      a.push(this.cards[(i*cardCount)+j])
    }
    distributedCards[i] = a;
  }
  return distributedCards
}

export function ShuffleCards() {
  for (var i = this.cards.length - 1; i > 0; i--) {
    var j = utils.GetRandomRange(0, i)
    this.cards = Swap(this.cards, i, j)
  }

  return this.cards
}

function Swap(cards: GameCard[], i1: number, i2: number) {
  var temp: GameCard = cards[i1]
  cards[i1] = cards[i2]
  cards[i2] = temp
  return cards
}
