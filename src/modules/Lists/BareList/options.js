import { BREAKPOINTS, LIST_SPACING } from 'constants/index'
import { buildListItems, buildSpace } from '../utils'

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
      options: buildListItems().map(item => ({
        value: item,
        label: item
      }))
    }
  ]
},
{
  title: 'Spacing (Breakpoints)',
  listType: 'matrix',
  options: BREAKPOINTS.map(bp => ({
    type: 'select',
    stateKey: `spacing.${bp}`,
    label: bp,
    options: LIST_SPACING.map(s => ({
      value: buildSpace(s, bp),
      label: s
    }))
  }))
}]

export default options
