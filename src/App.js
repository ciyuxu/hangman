import React, { Component } from 'react';
import './App.css';
import Input from './components/Input'
import Guesses from './components/Guesses'
import Word from './components/Word'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Word />
        <Guesses />
        <Input />

      </div>
    );
  }
}

export default App;
