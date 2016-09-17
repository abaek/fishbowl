import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    numWords: state.numWords,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addWord: (word) => dispatch({ type: 'ADD_WORD', value: word }),
  }
}

// Shows list of all words, scores between rounds, next team to play
// Lets you advance to the next round
class Scores extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Scores)
