const splitId = str => str.split('.')

const buildNewState = (state, id, value) => {
  const newId = splitId(id)

  if (newId.length === 1) {
    return {
      ...state,
      [newId]: value
    }
  }

  if (newId.length === 2) {
    return {
      ...state,
      [newId[0]]: {
        ...state[newId[0]],
        [newId[1]]: value
      }
    }
  }

  if (newId.length === 3) {
    return {
      ...state,
      [newId[0]]: {
        ...state[newId[0]],
        [newId[1]]: {
          ...state[newId[0]][newId[1]],
          [newId[2]]: value
        }
      }
    }
  }

  return state
}


export default buildNewState

/*
splitProps(id).reduce((acc, curr, i, arr) => {
  if (i === arr.length - 1) {
    return {
      ...acc,
      ...state[curr],
      [curr]: value
    }
  } else {
    acc[curr] = buildNewState(state, curr, value)
    return acc
  }
  return acc
}, {})
*/
