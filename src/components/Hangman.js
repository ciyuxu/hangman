import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import newGame from '../actions/new-game'


class Hangman extends PureComponent {


  startANewGame() {
    this.props.newGame()
  }



  showImages() {
    const initialState = 6
    var showImageNr = initialState - this.props.countdown
    var images = []
    for (let i = 0; i < showImageNr; i++) {
      images.unshift(
        <img src={`/images/${i + 1}.jpg`} key={i} />
      )
    }
    return images
  }





  render() {
    return (
      <div className="Hangman">
        {this.showImages()}
        <h1 className="Countdown">{ this.props.countdown } guesses left</h1>
        <div className="actions">
        <button className="primary" onClick={this.startANewGame.bind(this)}>Start a New Game</button>
        </div>
      </div>
    )
  }

}
const mapStateToProps = ({ guesses, countdown }) => ({ guesses, countdown })
const mapDispatchToProps = { newGame }

export default connect(mapStateToProps, mapDispatchToProps)(Hangman)
