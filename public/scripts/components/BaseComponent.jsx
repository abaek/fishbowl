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
  constructor(props) {
    super(props)
    this.state = {
      visiblePage: 'landing'
    }
    this.setPage = this.setPage.bind(this)
  }

  setPage(page) {
    this.setState({visiblePage: page})
  }

  render() {
    const { started } = this.props
    // TODO use a callback function or something that lets children call setPage
    switch(this.state.visiblePage) {
      case 'landing':
        return (<Landing/>)
      case 'lobby':
        return (<Lobby/>)
      case 'scores':
        return (<Scores/>)
      case 'word':
        retunr (<Word/>)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseComponent)
