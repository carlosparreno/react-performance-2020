import React from 'react';
import '../common/App.scss';
import { cards } from '../data.js';
import Grid from '../common/Grid';
import Card from './Card';

function AppEnhancement2() {
  return (
    <div className="app">
      <header className="App-header">React Performance in 2020</header>
      <main>
        <Grid id="maingrid" columnsNumber={4}>
          {cards.map((cardData, index) => {
            return (
              <Card
                key={`card-key-${cardData.title}`}
                title={cardData.title}
                contact={cardData.contact}
              />
            );
          })}
        </Grid>
      </main>
      <footer>This app is slow</footer>
    </div>
  );
}

export default AppEnhancement2;
