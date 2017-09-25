const MAX_LIST_ITEMS = 30

const buildListItems = (list = [], curr = 0) => {
  if (curr === MAX_LIST_ITEMS) {
    return list
  }
  list.push(curr)
  return buildListItems(list, curr + 1)
}

const buildSpace = (space, bp) => {
  if (space === 'None') {
    return ''
  }

  return bp === 'all' ? space : `${space}@${bp}`
}

export { buildListItems, buildSpace }
