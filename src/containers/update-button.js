import { connect } from 'react-redux'
import { send } from 'redux-electron-ipc'
import UpdateButtonPresenter from '../components/update-button-presenter.js'

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  return {
    btn_text: state.formActions.btn_text ? state.formActions.btn_text : ''
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateValue: (e, btn_text) => {
      e.preventDefault()
      // dispatch(toggleForm(ownProps.expanded))
      // dispatch(send('add-to-do', { title: title, details: details, complete: false, id: id }))
    }
  }
}

const UpdateButton = connect(mapStateToProps, mapDispatchToProps)(UpdateButtonPresenter)

export default UpdateButton