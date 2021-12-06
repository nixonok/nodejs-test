import * as express from "express"
import * as deck from "./card_utils/deck"
import { ICard, CardType } from "./card_utils/icard"

var route = express()
var port = 3001

route.get("/", (req, res) => {
  var cards = deck.Init()
  deck.ShuffleCards()
  let distributedCards = deck.DistributeCards()
  let distributedCardData = "Data{<br/>"

  for(var i = 0; i < 4; i++){
    distributedCardData += "Player #"+(+i+1)+" Cards : "
    for(var j = 0; j < 8; j++){
      distributedCardData += CardType[distributedCards[i][j].CardType]
      +"_"+JSON.stringify(distributedCards[i][j].Value) + ","
    }
    distributedCardData +="<br/>"
  }
  
  distributedCardData +="}"
  res.send(JSON.stringify(distributedCardData))
  
});

route.listen(port, () => {
  console.log(`Listening on port - ${port}!`)

});
