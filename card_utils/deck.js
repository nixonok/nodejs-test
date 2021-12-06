"use strict";
exports.__esModule = true;
exports.ShuffleCards = exports.DistributeCards = exports.Init = void 0;
var utils = require("../utils/utilities");
var GameCard = /** @class */ (function () {
    function GameCard() {
    }
    return GameCard;
}());
var cards = new Array();
function Build() {
    var myCards = [];
    for (var i = 0; i < 4; i++) {
        for (var j = 7; j < 15; j++) {
            var card = new GameCard();
            card.CardType = Math.floor(i);
            card.Value = j;
            myCards.push(card);
        }
    }
    return myCards;
}
function Init() {
    console.log("Initializing Deck!!!");
    var cards = Build();
    this.cards = cards;
    return cards;
}
exports.Init = Init;
function DistributeCards() {
    var playerCount = 4, cardCount = 8;
    var distributedCards = new Array();
    for (var i = 0; i < playerCount; i++) {
        var a = new Array();
        for (var j = 0; j < cardCount; j++) {
            a.push(this.cards[(i * cardCount) + j]);
        }
        distributedCards[i] = a;
    }
    return distributedCards;
}
exports.DistributeCards = DistributeCards;
function ShuffleCards() {
    for (var i = this.cards.length - 1; i > 0; i--) {
        var j = utils.GetRandomRange(0, i);
        this.cards = Swap(this.cards, i, j);
    }
    return this.cards;
}
exports.ShuffleCards = ShuffleCards;
function Swap(cards, i1, i2) {
    var temp = cards[i1];
    cards[i1] = cards[i2];
    cards[i2] = temp;
    return cards;
}
