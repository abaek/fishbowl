import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    numTeams: (num) => dispatch({
      type: 'NUM_TEAMS', value: num
    }),
    startGame: () => dispatch({
      type: 'SET_PAGE',
      page: 'lobby',
    }),
  }
}

// Select number of teams and team names before starting game
class Teams extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      teamNames: ['Team 1', 'Team 2', 'Team 3'],
      numTeams: 2,
    }
    this.startGame = this.startGame.bind(this)
  }

  startGame() {
    this.props.startGame()
  }

  handleNameChange(i, event) {
    let tNames = this.state.teamNames
    tNames[i] = event.target.value
    this.setState({
      teamNames: tNames,
    })
  }

  handleNumTeamChange(num, event) {
    this.setState({
      numTeams: num,
    })
  }

  render() {
    const { teamNames, numTeams } = this.state

    // Options are 2-3 teams
    let teamCount = []
    for (let i = 2; i < 4; i++) {
      let className = 'halfButton btn btn-default'
      if (numTeams == i) {
        className += ' active'
      }
      teamCount.push(
        <button
          className={className}
          onClick={this.handleNumTeamChange.bind(this, i)}
          key = {i} >
          {i}
        </button>
      )
    }

    let names = []
    for (let i = 0; i < numTeams; i++) {
        names.push(
          <div key= {i}>
            <input
              type='text'
              ref={'input' + i}
              value={teamNames[i]}
              onChange={this.handleNameChange.bind(this, i)}
              onFocus={()=>{this.refs['input' + i].select()}} />
            <br/>
          </div>
        )
    }

    return (
      <div className='container-fluid body'>
        How many teams? <br/>
        <div className='btn-group'>
          { teamCount }
        </div>
        <br/>

        { names }

        <button
          onClick={this.props.startGame}
          className='button btn btn-default' >
          Continue
        </button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams)
