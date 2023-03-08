export const SUITS = ["hearts", "diamonds", "clubs", "spades"];
export const RANKS = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

export const createDeck = () => {
  const deck = [];
  for (let i = 0; i < SUITS.length; i++) {
    for (let j = 0; j < RANKS.length; j++) {
      deck.push({ suit: SUITS[i], rank: RANKS[j] });
    }
  }

  return deck;
};



export const shuffleDeck=(deck)=> {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

export const  sortCards=(cards) =>{
  return cards.sort((cardA, cardB) => {
    const suitOrder = ["clubs", "spades", "hearts", "diamonds"];
    const rankOrder = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
    ];

    const suitA = suitOrder.indexOf(cardA.suit);
    const suitB = suitOrder.indexOf(cardB.suit);

    if (suitA !== suitB) {
      return suitA - suitB;
    }

    const rankA = rankOrder.indexOf(cardA.rank);
    const rankB = rankOrder.indexOf(cardB.rank);

    return rankA - rankB;
  });
}