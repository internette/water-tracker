import React from 'react'
import PropTypes from 'prop-types'
require('../styles/update-button.scss')

const UpdateButtonPresenter = (props) => (
  <button onClick={props.updateAmount}>{props.btn_text}</button>
)

UpdateButtonPresenter.propTypes = {
  btn_text: PropTypes.string.isRequired,
  updateAmount: PropTypes.func.isRequired
}

export default UpdateButtonPresenter