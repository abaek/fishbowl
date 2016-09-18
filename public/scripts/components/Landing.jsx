import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    numWords: state.numWords,
    words: state.words,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addWord: (word) => dispatch({ type: 'ADD_WORD', value: word }),
    startGame: () => dispatch({ type: 'START_GAME' }),
  }
}

class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
    this.addWord = this.addWord.bind(this);
    this.handleWordChange = this.handleWordChange.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  handleWordChange(event) {
    this.setState({value: event.target.value})
  }

  addWord() {
    console.log('submit word')
    this.props.addWord(this.state.value)
    this.setState({value: ''})
    console.log(this.props.words)
  }

  startGame() {

  }

  render() {
    return (
      <div className="container-fluid body">
        <img src="img/fishbowl.png" />
        <br/>
        How many teams? <br/>
        <div className="btn-group">
          <button className="btn btn-default active">2</button>
          <button className="btn btn-default">3</button>
          <button className="btn btn-default">4</button>
        </div>
        <br/>
        {this.props.numWords} words
        <br/>
        Enter Word/Phrase:
        <br/>
        <input type="text"
          value={this.state.value}
          onChange={this.handleWordChange}
          />
        <br/>
        <button
          onClick={this.addWord}
          className="btn btn-default"
          >
          Add
        </button>
        <br/>
        <button
          onClick={this.startGame}
          className="btn btn-default"
          >
          Start Game!
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
