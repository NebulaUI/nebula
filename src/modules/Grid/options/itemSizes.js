import { BREAKPOINTS, GRID_FRACTIONS } from 'constants/index'
import { items } from './constants'

const buildValue = (v, bp) => {
  if (v === 'None') {
    return ''
  }

  return bp === 'all' ? v : `${v}@${bp}`
}

const buildItemSizes = item => ({
  title: `Example item ${item} sizes (Breakpoints)`,
  foldable: true,
  foldableOpenOnMount: false,
  listType: 'matrix',
  options: BREAKPOINTS.map(bp => ({
    type: 'select',
    stateKey: `item${item}.sizes.${bp}`,
    label: `${bp}`,
    options: GRID_FRACTIONS.map(fraction => ({
      value: buildValue(fraction, bp),
      label: fraction || 'None'
    }))
  }))
})

const itemSizes = () =>
  items.map(i => buildItemSizes(i))

export default itemSizes
