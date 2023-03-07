import React, { useState } from "react";
import { createDeck } from "./utils/Decks.js";
import './App.css'
import { shuffleDeck } from "./utils/Decks.js";
import { sortCards } from "./utils/Decks.js";
import { Card } from "./component/Card.js";




function App() {
  const [deck, setDeck] = useState(() => createDeck());

  function shuffle() {
    const newDeck = [...deck];
    shuffleDeck(newDeck);
    setDeck(newDeck);
  }

  function drawCards(numCards) {
    const drawnCards = deck.slice(0, numCards);
    const newDeck = deck.slice(numCards);
    setDeck(newDeck);
    return drawnCards;
  }

  

  function drawAndSortCards(numCards) {
    const drawnCards = drawCards(numCards);
    return sortCards(drawnCards);
  }

  return (
    <div>
      <button onClick={shuffle} className='shuffle-button'>
        Shuffle
      </button>
      <div>
        <button
          onClick={() => console.log(drawCards(5))}
          className='shuffle-button'>
          Draw 5 Cards
        </button>
        <button
          onClick={() => console.log(drawAndSortCards(5))}
          className='shuffle-button'>
          Draw 5 Cards and Sort
        </button>
      </div>
      <div className='card-container'>
        {deck.map(({ suit, rank }, index) => (
          <Card key={index} suit={suit} rank={rank} />
        ))}
      </div>
      <div><h3>Drawn and sorted results are in the console</h3></div>
    </div>
  );
}

export default App;

