import { breakpoints } from 'utils/constants'

const MAX_LIST_ITEMS = 10

const buildFoldableComponents = (list = [], curr = 1) => {
  if (curr === MAX_LIST_ITEMS) {
    return list
  }
  list.push(curr)
  return buildFoldableComponents(list, curr + 1)
}

const options = [{
  title: 'Foldable',
  options: [
    {
      type: 'checkbox',
      stateKey: 'openOnMount',
      label: 'Open on mount.'
    },
    {
      type: 'checkbox',
      stateKey: 'headerPadding',
      label: 'Padding around Header.'
    },
    {
      type: 'checkbox',
      stateKey: 'bordered',
      label: 'Borders between foldable Components.'
    },
    {
      type: 'checkbox',
      stateKey: 'cardInBody',
      label: 'Nest Card component inside foldable body.'
    },
    {
      type: 'checkbox',
      stateKey: 'cardWrapping',
      label: 'Wrap Card around all foldable components..'
    },
    {
      type: 'select',
      stateKey: 'breakpoint',
      label: 'Breakpoint',
      options: breakpoints.map(bp => ({
        value: bp === 'all' ? bp : `max-${bp}`,
        label: bp === 'all' ? bp : `max ${bp}`
      }))
    },
    {
      type: 'select',
      stateKey: 'qtyFoldableComponents',
      label: 'Quantity of Foldable components',
      options: buildFoldableComponents().map(item => ({
        value: item,
        label: item
      }))
    }
  ]
}]

export default options
