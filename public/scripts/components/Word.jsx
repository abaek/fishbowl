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

// Shows the word, the timer and a button to go to the next word
class Word extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 60,
    }

    setInterval(decreaseSecond, 1000);
  }

  decreaseSecond() {
    this.setState({
      time: this.state.time - 1;
    })
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        0:{time}
        <br/>
        <button
          onClick={this.addFiveRandomWords}
          className='button btn btn-default'
          >
          Show
        </button>
        The Quick Fox
        <button
          onClick={this.addFiveRandomWords}
          className='button button btn btn-default'
          >
          Next
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Word)
