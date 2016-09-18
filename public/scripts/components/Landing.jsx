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
      addDisabled: true,
      startDisabled: true,
    }
    this.addWord = this.addWord.bind(this);
    this.handleWordChange = this.handleWordChange.bind(this);
    this.startGame = this.startGame.bind(this);
  }

  handleWordChange(event) {
    this.setState({
      value: event.target.value,
      addDisabled: event.target.value.length == 0,
    });
  }

  addWord() {
    if(this.state.value.length == 0){
      return;
    }

    console.log('submit word') // TODO remove

    this.props.addWord(this.state.value)
    this.setState({
      value: '',
      startDisabled: this.props.words.length == 0,
    })

    console.log(this.props.words) // TODO remove
  }

  startGame() {

  }

  render() {
    return (
      <div className="container-fluid body">
        <img src="img/fishbowl.png" className=".img-responsive"/>
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
          disabled={this.state.addDisabled}
          >
          Add
        </button>
        <br/>
        <button
          onClick={this.startGame}
          className="btn btn-default"
          disabled={this.state.startDisabled}
          >
          Start Game!
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
