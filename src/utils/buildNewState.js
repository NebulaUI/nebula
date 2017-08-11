const splitId = s =>
  Array.isArray(s)
    ? s
    : s.split('.')

const extractFirstItem = a => a[0]

const removeFirst = a => a.slice(1)

const buildNewState = (state, id, value) => {
  if (!id) {
    return undefined
  }

  const newId = splitId(id)

  if (newId.length === 1) {
    return {
      ...state,
      [newId]: value
    }
  }

  const nextState = state[extractFirstItem(newId)]
  const nextId = removeFirst((newId))
  const currentKey = extractFirstItem(newId)

  return {
    ...state,
    [currentKey]: buildNewState(nextState, nextId, value)
  }
}

export default buildNewState
