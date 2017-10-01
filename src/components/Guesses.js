import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Guess from '../actions/guess'

class Guesses extends PureComponent {


  render() {
    return(
      <h2 className="Guesses">{ this.props.Guess }</h2>
    )
  }
}

export default Guesses
