import React, { useState } from 'react';
import './App.scss';
import { cards } from '../data.js';
import Grid from '../common/Grid';
import CardHeader from '../common/CardHeader';
import CardBody from '../common/CardBody';

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

  const handleOnClick = (title) => {
    updateCards(title);
  };

  return (
    <div className="app">
      <header className="App-header">React Performance in 2020</header>
      <main>
        <Grid id="maingrid" columnsNumber={4}>
          {cardsData.map((cardData, index) => {
            return (
              <div className="Card" key={`card-key-${cardData.title}`}>
                <CardHeader title={cardData.title} />
                <CardBody contact={cardData.contact} />
                {cardData.likes !== undefined && (
                  <span>{`Likes: ${cardData.likes}`}</span>
                )}
                <button onClick={() => handleOnClick(cardData.title)}>
                  +1
                </button>
              </div>
            );
          })}
        </Grid>
      </main>
      <footer>This app is slow</footer>
    </div>
  );
}

export default App;
