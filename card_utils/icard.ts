export enum CardType {
  NONE = -1,
  CLUB,
  DIAMOND,
  HEART,
  SPADE,
}

export interface ICard {
  /// Type of the card. Example: CLUB, DIAMOND...
  CardType: CardType;
  /// Point of the card. Example: 'Jack' is 11, 'Ace' is 14, '10' is 10
  Value: Number;
}
