import Landing from './Landing.jsx'
import Lobby from './Lobby.jsx'
import Word from './Word.jsx'
import Scores from './Scores.jsx'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    started: state.started,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startGame: () => dispatch({ type: 'START_GAME' }),
  }
}

class BaseComponent extends React.Component {
  render() {
    const { started } = this.props
    return (
      <div>
        <Landing />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseComponent)
