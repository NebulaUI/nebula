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
  title: '',
  options: [
    {
      type: 'checkbox',
      stateKey: 'wrapInCard',
      label: 'Wrap Inline List in Card component.'
    },
    {
      type: 'select',
      stateKey: 'qtyItems',
      label: 'Quantity of list items',
      options: buildLisItems().map(item => ({
        value: item,
        label: item
      }))
    }
  ]
},
{
  title: 'Spacing (Breakpoints)',
  listType: 'matrix',
  options: breakpoints.map(bp => ({
    type: 'select',
    stateKey: `spacing.${bp}`,
    label: bp,
    options: Object.keys(spacingSizes).map(key => ({
      value: bp === 'all' ? key : `${key}@${bp}`,
      label: spacingSizes[key]
    }))
  }))
}]

export default options
