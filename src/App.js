import React from 'react';
import './App.scss';
import { cards } from './data.js';
import Card from './components/Card';

function App() {
  return (
    <div className="app">
      <header className="App-header">React Performance in 2020</header>
      <main>
        {cards.map(() => {
          return <Card />;
        })}
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
