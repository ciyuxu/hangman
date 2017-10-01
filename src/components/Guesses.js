import React, { PureComponent } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'


class Guesses extends PureComponent {

  

  render() {
    return(
      <div className="Guesses">
      <h3 className="Guessed">You have guessed: { this.props.guesses }</h3>
      </div>
    )
  }
}

const mapStateToProps = ({ guesses }) => ({ guesses })
// function mapStateToProps(state) {
//   let { guesses } = state;
//   return { guesses };
// }
// function mapStateToProps({ guesses }) {
//   return { guesses };
// }

export default connect (mapStateToProps)(Guesses)
