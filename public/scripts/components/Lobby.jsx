import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    numWords: state.numWords,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startRound: () => dispatch({
      type: 'SET_PAGE',
      page: 'word',
    }),
  }
}

// Screen between turns
// Shows number of words remaining, scores and next team to go
class Lobby extends React.Component {
  render() {
    return (
      <div>
        Round 1: Taboo
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
