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
