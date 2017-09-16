import { BREAKPOINTS } from 'constants/index'

const MAX_LIST_ITEMS = 30

const buildLisItems = (list = [], curr = 0) => {
  if (curr === MAX_LIST_ITEMS) {
    return list
  }
  list.push(curr)
  return buildLisItems(list, curr + 1)
}

const options = [{
  title: '',
  options: [
    {
      type: 'checkbox',
      stateKey: 'wrapInCard',
      label: 'Wrap Bare List in Card component.'
    },
    {
      type: 'select',
      stateKey: 'qtyItems',
      label: 'Quantity of list items',
      options: buildLisItems().map(item => ({
        value: item,
        label: item
      }))
    },
    {
      type: 'select',
      stateKey: 'breakpoint',
      label: 'Breakpoint',
      options: BREAKPOINTS.map(bp => ({
        value: bp,
        label: bp
      }))
    }
  ]
}]

export default options
