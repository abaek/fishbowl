import { createStore } from 'redux'

const defaultState = {
  started: false,
  numWords: 0,
  words: [],
}

function random() {
  let date = new Date()
  let seed = date.getTime()
  const x = Math.sin(seed++) * 10000
  return x - Math.floor(x)
}

const counter = (state = defaultState, action) => {
  switch (action.type) {
    case 'START_GAME':
      return Object.assign({}, state, {
        started: true,
      })
    case 'ADD_WORD':
      state.words.push(action.value)
      return Object.assign({}, state, {
        numWords: state.numWords + 1,
      })
    default:
      return state
  }
}

const Store = createStore(counter)
export default Store
