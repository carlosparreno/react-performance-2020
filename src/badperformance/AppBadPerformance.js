import React, { useState } from 'react';
import '../App.scss';
import { cards } from '../data.js';
import Card from './components/Card';
import Grid from '../common/Grid';

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
        <Grid id="maingrid" columnsNumber={4}>
          {cardsData.map((cardData, index) => {
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
        </Grid>
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
