"use strict";
exports.__esModule = true;
var express = require("express");
var deck = require("./card_utils/deck");
var icard_1 = require("./card_utils/icard");
var route = express();
var port = 3001;
route.get("/", function (req, res) {
    var cards = deck.Init();
    deck.ShuffleCards();
    var distributedCards = deck.DistributeCards();
    var distributedCardData = "Data{<br/>";
    for (var i = 0; i < 4; i++) {
        distributedCardData += "Player #" + (+i + 1) + " Cards : ";
        for (var j = 0; j < 8; j++) {
            var color = distributedCards[i][j].CardType == icard_1.CardType.HEART || distributedCards[i][j].CardType == icard_1.CardType.DIAMOND ? "red" : "black";
            distributedCardData += "<p style='color:" + color + "; display: inline;'>" + icard_1.CardType[distributedCards[i][j].CardType]
                + "</p>_" + JSON.stringify(distributedCards[i][j].Value) + ",";
        }
        distributedCardData += "<br/>";
    }
    distributedCardData += "}";
    res.send(JSON.stringify(distributedCardData));
});
route.listen(port, function () {
    console.log("Listening on port - " + port + "!");
});
