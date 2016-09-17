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

// Screen between turns
// Shows number of words remaining, scores and next team to go
class Lobby extends React.Component {
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

export default connect(mapStateToProps, mapDispatchToProps)(Lobby)
