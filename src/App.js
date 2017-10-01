import React, { Component } from 'react';
import './App.css';
import Input from './components/Input'
import Guesses from './components/Guesses'
import Word from './components/Word'
import Winner from './components/Winner'
import Hangman from './components/Hangman'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Hangman />
        <Word />
        <Guesses />
        <Input />
        <Winner />


      </div>
    );
  }
}

export default App;
