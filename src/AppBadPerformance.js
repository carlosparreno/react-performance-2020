import React, { useState } from 'react';
import './App.scss';
import { cards } from './data.js';
import Card from './components/Card';

function App() {
  const [cardsData, setCardsData] = useState(cards);

  const updateCards = (cardTitle) => {
    const newCardsData = [...cardsData];
    newCardsData.forEach((card) => {
      if (card.title === cardTitle) {
        card.likes++;
      }
    });
    setCardsData(newCardsData);
  };

  return (
    <div className="app">
      <header className="App-header">React Performance in 2020</header>
      <main>
        {cardsData.map((cardData) => {
          return (
            <Card
              key={`card-key-${cardData.title}`}
              title={cardData.title}
              contact={cardData.contact}
              likes={cardData.likes}
              update={updateCards}
            />
          );
        })}
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
