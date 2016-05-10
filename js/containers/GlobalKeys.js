import { connect } from 'react-redux'
import GlobalKeys from '../components/GlobalKeys'

import { keyPressed } from '../actions/index'
const mapStateToProps = (state) => {
  

  return {
    currentInput: state.currentGame.currentInput,
 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleKeyPress: (key) => {
   
      dispatch(keyPressed(key))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalKeys)
