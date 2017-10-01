import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import guess from '../actions/guess'

class Input extends PureComponent {
 constructor (props) {
   super(props)
   this.state = { letter: "", errors: {} }
 }


  // static propTypes = {
  //   content: PropTypes.string.isRequired,
  // }

  

  validate() {
  const isLetterValid = this.validateLetter()
  this.setState({
    errors: {
      letter: isLetterValid ? null : 'Guess can not be blank!',
      }
  })
  return isLetterValid
  }

  validateLetter() {
    const { letter } = this.state
    return letter.length > 0
  }

  onLetterChanged(event){
    this.setState({
      letter: event.target.value
    })
  }

  saveLetter() {
    if (!this.validate()) return
    this.props.guess(this.state.letter)


  }
  render() {
    const { errors } = this.state

    return(
      <div className="input">
        <input
          type="text"
          className="letter"
          placeholder="Enter your guess here"
          value={this.state.letter}
          onChange={this.onLetterChanged.bind(this)} />
          { errors.letter ? <small className="error">{errors.letter}</small> : null }

          <div className="actions">
          <button className="primary" onClick={this.saveLetter.bind(this)}>Guess</button>
          </div>
        </div>

    )
  }
}



const mapDispatchToProps = { guess }

export default connect(null, mapDispatchToProps)(Input)
