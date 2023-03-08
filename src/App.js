import React, { useState } from "react";
import { createDeck } from "./utils/Decks.js";
import './App.css'
import { shuffleDeck } from "./utils/Decks.js";
import { sortCards } from "./utils/Decks.js";
import { Card } from "./component/Card.js";




function App() {
  const [deck, setDeck] = useState(() => createDeck());
  const [dCards, setDcard]=useState({})


  function shuffle() {
    const newDeck = [...deck];
    shuffleDeck(newDeck);
    setDeck(newDeck);
  }

  function drawCards(numCards) {
    const drawnCards = deck.slice(0, numCards);
    const newDeck = deck.slice(numCards);
    setDeck(newDeck);
    setDcard(drawnCards);
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
}

export default App;

