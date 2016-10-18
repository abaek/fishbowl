import { createStore } from 'redux'

const defaultState = {
  numWords: 0,
  numWordsLeft: 0,
  words: [],
  wordsLeft: [],
  teams: [],
  page: 'landing',
  round: 1,
  currentTeam: 0,
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
        numWordsLeft: state.numWordsLeft + 1,
      })
    default:
      return state
  }
}

const Store = createStore(counter)
export default Store
