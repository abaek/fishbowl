import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    numWords: state.numWords,
    round: state.round,
    currentTeam: state.currentTeam,
    wordsLeft: state.wordsLeft,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startRound: () => dispatch({
      type: 'SET_PAGE',
      page: 'word',
    }),
    increaseRound: () => dispatch({
      type: 'INCREASE_ROUND',
    }),
  }
}

const roundNames = ["ZERO ERROR", "Taboo", "Password", "Charades"]

// Screen between turns
// Shows number of words remaining, scores and next team to go
class Lobby extends React.Component {
  componentWillMount() {
    if (this.props.wordsLeft.length == 0) {
        this.props.increaseRound()
    }
  }

  render() {
    return (
      <div>
        Round {this.props.round}: {roundNames[this.props.round]}
        <br/>
        Team 1 Ready?
        <br/>
        17 words remaining
        <br/>
        <button
          onClick={this.props.startRound}
          className='button btn btn-default'
          >
          Start Round
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lobby)
