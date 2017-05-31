import React, { Component } from 'react';
import '../styles/App.css';
import spells from '../data/spells.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      spells: spells.spells
    }
  }
  render() {
    return (
      <div className="App">
        {
          this.state.spells.map((spell, i) =>
          <div key={i}>
            <h2>{spell.name}</h2>
            <small>Level {spell.level} {spell.school}</small>
            <p>Casting time: {spell.time}</p>
            <p>Range: {spell.range}</p>
            <p>Components: {spell.components}</p>
            <p>
              {spell.text}
            </p>

          </div>
          )
        }
      </div>
    );
  }
}

export default App;
