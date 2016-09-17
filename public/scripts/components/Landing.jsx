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

class Landing extends React.Component {
  render() {
    return (
      <div>
        Landing
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
