import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    wordsLeft: state.wordsLeft,
    currentWord: state.currentWord,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    endRound: () => dispatch({
      type: 'SET_PAGE',
      page: 'lobby',
    }),
    nextWord: () => dispatch({
      type: 'NEXT_WORD',
    }),
  }
}

var SetIntervalMixin = {

}


// Shows the word, the timer and a button to go to the next word
class Word extends React.Component {
  componentWillMount() {
    this.intervals = []

    this.state = {
      time: 60,
      showHideClass: '',
    }

    console.log("time = 10")

    this.decreaseSecond = this.decreaseSecond.bind(this)
    this.showHide = this.showHide.bind(this)
    this.nextWord = this.nextWord.bind(this)

    this.setInterval(this.decreaseSecond, 1000)
    this.props.nextWord()
  }

  setInterval() {
    this.intervals.push(setInterval.apply(null, arguments))
  }

  componentWillUnmount() {
    this.intervals.forEach(clearInterval)
  }

  decreaseSecond() {
    console.log("decreasing second. time = " + this.state.time)
    if(this.state.time == 1) {
      this.props.endRound()
      return
    }

    this.setState({
      time: this.state.time - 1,
    })
  }

  pad(num, size) {
    var s = num+""
    while (s.length < size) s = "0" + s
    return s
  }

  showHide() {
    const { showHideClass } = this.state
    if (showHideClass === '') {
      this.setState({
        showHideClass: 'hide'
      })
    } else {
      this.setState({
        showHideClass: ''
      })
    }
  }

  nextWord() {
    if (this.props.wordsLeft.length > 1) {
      this.setState({
        showHideClass: 'hide'
      })
      this.props.nextWord()
    } else {
      this.props.nextWord()
      this.props.endRound()
    }
  }

  render() {
    const { time, showHideClass } = this.state
    const { currentWord } = this.props;
    let showHideButtonText = 'Hide';
    if (showHideClass === 'hide') {
      showHideButtonText = 'Show';
    }
    return (
      <div>
        0:{this.pad(time, 2)}
        <br/>
        <button
          onClick={this.showHide}
          className='button btn btn-default'
          >
          { showHideButtonText }
        </button>
        <div
          className={ showHideClass }>
          { currentWord }
        </div>
        <button
          onClick={this.nextWord}
          className='button button btn btn-default'
          >
          Next
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Word)
