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
  }

  handleWordChange(event) {
    this.setState({
      value: event.target.value,
      addDisabled: event.target.value.length == 0,
    })
  }

  addWord() {
    if(this.state.value.length == 0){
      return
    }

    this.props.addWord(this.state.value)
    this.setState({
      value: '',
      startDisabled: this.props.words.length == 0,
    })

    console.log(this.props.words) // TODO remove
  }

  render() {
    const { numWords, startGame } = this.props
    const { value, addDisabled, startDisabled } = this.state

    return (
      <div className='container-fluid body'>
        <img src='img/fishbowl.png' className='.img-responsive'/>

        <br/>
        {numWords} words
        <br/>
        Enter Word/Phrase:
        <br/>
        <input type='text'
          value={value}
          onChange={this.handleWordChange}
          />
        <br/>
        <button
          onClick={this.addWord}
          className='btn btn-default'
          disabled={addDisabled}
          >
          Add
        </button>
        <br/>
        
        <button
          onClick={startGame}
          className='btn btn-default'
          disabled={startDisabled}
          >
          Start
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
