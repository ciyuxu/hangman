import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import newGame from '../actions/new-game'


class Winner extends PureComponent {


  isWinner() {
  const guesses = this.props.guesses
  const word = "invention"
  var rightLetters = word.split("");
    return rightLetters.filter(function(letter) {
      return (guesses.indexOf(letter)) === -1
    }).length === 0
  }

  countdown() {
    const guessNr = this.props.guesses.length
    const chances = 6
    return chances - guessNr

  }





  render() {
    return(
    <h2 className="Winner">{ this.isWinner() ? "You Won!" : this.countdown()=== 0 ?  "You Lose!" : ""}</h2>
  )
  }
}


const mapStateToProps = ({ guesses }) => ({ guesses })
export default connect(mapStateToProps)(Winner)
