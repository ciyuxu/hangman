import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import newGame from '../actions/new-game'


class Hangman extends PureComponent {
  countdown() {
    const guessNr = this.props.guesses.length
    const chances = 6
    if (guessNr < chances) {
      return chances - guessNr
    }
  }

  startANewGame() {
    this.props.newGame()
  }



  render() {
    return (
      <div className="Hangman">
        <h1 className="Countdown">{ this.countdown() }</h1>
        <div className="actions">
        <button className="primary" onClick={this.startANewGame.bind(this)}>Start a New Game</button>
        </div>
      </div>
    )
  }

}
const mapStateToProps = ({ guesses }) => ({ guesses })
const mapDispatchToProps = { newGame }

export default connect(mapStateToProps, mapDispatchToProps)(Hangman)
