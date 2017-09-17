import { BREAKPOINTS } from 'constants/index'
import { buildListItems } from '../utils'

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
