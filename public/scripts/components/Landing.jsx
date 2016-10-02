import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    numWords: state.numWords,
    words: state.words,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addWord: (word) => dispatch({
      type: 'ADD_WORD',
      value: word
    }),
    startGame: () => dispatch({
      type: 'SET_PAGE',
      page: 'teams',
    }),
  }
}

class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      addDisabled: true,
      startDisabled: true,
    }
    this.addWord = this.addWord.bind(this)
    this.handleWordChange = this.handleWordChange.bind(this)
    this.addFiveRandomWords = this.addFiveRandomWords.bind(this)
  }

  handleWordChange(event) {
    this.setState({
      value: event.target.value,
      addDisabled: event.target.value.length == 0,
    })
  }

  addFiveRandomWords() {
    this.props.addWord('Hi')
    this.props.addWord('Sup')
    this.props.addWord('Doggie')
    this.props.addWord('Cat says Hi')
    this.props.addWord('Christmas nightmare')
    this.setState({
      startDisabled: false,
    })
  }

  addWord() {
    this.props.addWord(this.state.value)
    this.setState({
      value: '',
      startDisabled: false,
      addDisabled: true,
    })

    console.log(this.props.words) // TODO remove
  }

  render() {
    const { numWords, startGame } = this.props
    const { value, addDisabled, startDisabled } = this.state

    // <img src='img/fishbowl.png' className='fullWidth' />
    return (
      <div className='container-fluid body'>
        <br/>
        <input type='text'
          value={value}
          onChange={this.handleWordChange}
          />
        <button
          onClick={this.addWord}
          className='button btn btn-default'
          disabled={addDisabled}
          >
          Add Word
        </button>
        <br/>
        <br/>
        {numWords} words
        <br/>
        <br/>
        <button
          onClick={this.addFiveRandomWords}
          className='button btn btn-default'
          >
          Add 5 Random Words
        </button>
        <button
          onClick={startGame}
          className='button btn btn-default'
          disabled={startDisabled}
          >
          Start Game
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
