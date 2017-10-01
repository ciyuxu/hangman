import React, { PureComponent } from 'react'
import { connect } from 'react-redux'


class Word extends PureComponent {


showGuess() {
    const { word, guesses } = this.props;
    var rightLetters = word.split("");
    return rightLetters.map(function(letter) {
      if (guesses.indexOf(letter) === -1) {
        return "_";
      } else {
        return letter;
      }
    }).join(" ");
  }


  render() {
    return (
  <h2 className="RightGuesses">Your word:{ this.showGuess() }</h2>
    )
  }
}
const mapStateToProps = ({ guesses, word }) => ({ guesses, word })
export default connect (mapStateToProps)(Word)
