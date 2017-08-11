const split = s => (
  Array.isArray(s)
    ? s
    : s.split('.')
)

const isLeafSegment = id => id.length === 1
const requiredArgs = (st, id) => st && id
const extractFirstItem = a => a[0]
const getNextId = a => a.slice(1)
const getNextStateSegment = (st, id) => st[extractFirstItem(id)]

const buildNewState = (state, id, value) => {
  if (!requiredArgs(state, id)) {
    return undefined
  }

  const newId = split(id)
  const nextStateSegment = getNextStateSegment(state, newId)
  const nextId = getNextId(newId)
  const currentKey = extractFirstItem(newId)

  const getNewState = () => ({
    [newId]: value
  })

  const buildNextStateSegment = () => ({
    [currentKey]: buildNewState(nextStateSegment, nextId, value)
  })

  return isLeafSegment(newId)
    ? { ...state, ...getNewState() }
    : { ...state, ...buildNextStateSegment() }
}

export default buildNewState
