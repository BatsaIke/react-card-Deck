import React, { useState } from "react";
import { createDeck } from "./utils/DecksActions.js";
import "./App.css";
import { shuffleDeck } from "./utils/DecksActions.js";
import { sortCards } from "./utils/DecksActions.js";
import { Card } from "./component/Card.js";

const App = () => {
  const [deck, setDeck] = useState(() => createDeck());
  const [dCards, setDcard] = useState({});

  //shufle cards functoin
  const shuffleHandler = () => {
    const newDeck = [...deck];
    shuffleDeck(newDeck);
    setDeck(newDeck);
  };

  //draw cards
  const drawCardsHandler = (numCards) => {
    const drawnCards = deck.slice(0, numCards);
    const newDeck = deck.slice(numCards);
    setDeck(newDeck);
    setDcard(drawnCards);
    return drawnCards;
  };

  //draw cards and sort
  const drawAndSortCards = (numCards) => {
    const drawnCards = drawCardsHandler(numCards);
    return sortCards(drawnCards);
  };

  return (
    <div>
      <div className='btn-div'>
        <button onClick={shuffleHandler} className='shuffle-button'>
          Shuffle
        </button>

        <button
          onClick={() => console.log(drawCardsHandler(5))}
          className='shuffle-button'>
          Draw 5 Cards
        </button>

        <button
          onClick={() => console.log(drawAndSortCards(5))}
          className='shuffle-button'>
          Draw 5 Cards and Sort
        </button>
      </div>
      <div className='deck'>
        {deck.map(({ suit, rank }, index) => (
          <Card key={index} suit={suit} rank={rank} />
        ))}
      </div>

      {dCards.length > 0 && <h3>The drawn cards are </h3>}
      <div className='d-container'>
        {dCards.length > 0
          ? dCards.map(({ suit, rank }, index) => (
              <Card key={index} suit={suit} rank={rank} />
            ))
          : ""}
      </div>
    </div>
  );
};

export default App;
