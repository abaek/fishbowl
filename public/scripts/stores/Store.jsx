import { createStore } from 'redux'

const defaultState = {
  numWords: 0,
  words: [],
  wordsLeft: [],
  teams: [],
  page: 'landing',
  round: 1,
  currentTeam: 0,
  currentWord: '',
}

function random() {
  let date = new Date()
  let seed = date.getTime()
  const x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

const counter = (state = defaultState, action) => {
  switch (action.type) {
    case 'SET_PAGE':
      return Object.assign({}, state, {
        page: action.page,
      })
    case 'ADD_WORD':
      state.words.push(action.value)
      state.wordsLeft.push(action.value)
      return Object.assign({}, state, {
        numWords: state.numWords + 1,
      })
    case 'NEXT_WORD':
      let index = state.wordsLeft.indexOf(state.currentWord)
      if (index > -1) {
        state.wordsLeft.splice(index, 1)
      }
      let randomIndex = Math.floor(Math.random() * state.wordsLeft.length)
      return Object.assign({}, state, {
        currentWord: state.wordsLeft[randomIndex],
      })
    case 'INCREASE_ROUND':
      return Object.assign({}, state, {
        wordsLeft: state.words,
        round: state.round + 1,
      })
    default:
      return state
  }
}

const Store = createStore(counter)
export default Store
