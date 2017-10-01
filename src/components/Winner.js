import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
// import newGame from '../actions/new-game'


class Winner extends PureComponent {


  isWinner() {
  const { guesses, word } = this.props;

  var rightLetters = word.split("");
    return rightLetters.filter(function(letter) {
      return (guesses.indexOf(letter)) === -1
    }).length === 0
  }






  render() {
    return(
    <h2 className="Winner">{ this.isWinner() ? "You Won!" : this.props.countdown === 0 ?  "You Lose!" : ""}</h2>
  )
  }
}


const mapStateToProps = ({ guesses, countdown, word }) => ({ guesses, countdown, word })
export default connect(mapStateToProps)(Winner)
