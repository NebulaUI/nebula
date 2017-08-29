import { breakpoints } from 'utils/constants'

const spacingSizes = {
  '': 'None',
  md: 'Medium'
}

const MAX_LIST_ITEMS = 30

const buildLisItems = (list = [], curr = 0) => {
  if (curr === MAX_LIST_ITEMS) {
    return list
  }
  list.push(curr)
  return buildLisItems(list, curr + 1)
}

const options = [{
  title: 'Checkbox',
  options: [
    {
      type: 'checkbox',
      stateKey: 'disabled',
      label: 'Disabled'
    }
  ]
}]

export default options
