import Landing from './Landing.jsx'
import Lobby from './Lobby.jsx'
import Word from './Word.jsx'
import Teams from './Teams.jsx'
import Scores from './Scores.jsx'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    page: state.page,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

class BaseComponent extends React.Component {
  render() {
    switch(this.props.page) {
      case 'landing':
        return <Landing/>
      case 'teams':
        return <Teams/>
      case 'lobby':
        return <Lobby/>
      case 'scores':
        return <Scores/>
      case 'word':
        return <Word/>
      default:
        return null
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseComponent)
