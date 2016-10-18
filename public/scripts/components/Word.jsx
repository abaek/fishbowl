import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    numWords: state.numWords,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    endRound: () => dispatch({
      type: 'SET_PAGE',
      page: 'lobby',
    }),
  }
}

var SetIntervalMixin = {

};


// Shows the word, the timer and a button to go to the next word
class Word extends React.Component {
  componentWillMount() {
    this.intervals = [];

    this.state = {
      time: 60,
    };

    console.log("time = 10");

    this.decreaseSecond = this.decreaseSecond.bind(this);

    this.setInterval(this.decreaseSecond, 1000);
  }

  setInterval() {
    this.intervals.push(setInterval.apply(null, arguments));
  }

  componentWillUnmount() {
    this.intervals.forEach(clearInterval);
  }

  decreaseSecond() {
    console.log("decreasing second. time = " + this.state.time);
    if(this.state.time == 1) {
      this.props.endRound();
      return;
    }

    this.setState({
      time: this.state.time - 1,
    })
  }

  pad(num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
  }

  render() {
    const { time } = this.state
    return (
      <div>
        0:{this.pad(time, 2)}
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
