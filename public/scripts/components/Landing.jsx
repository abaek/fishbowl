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
  }
}

class Landing extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
    this.submitWord = this.submitWord.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  submitWord() {
    console.log('submit word')
    this.props.addWord(this.state.value)
    console.log(this.props.words)
  }

  render() {
    return (
      <div>
        {this.props.numWords} words
        <input type="text"
          value={this.state.value}
          onChange={this.handleChange}
           />
         <button onClick={this.submitWord}>
           Submit
         </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
