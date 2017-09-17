import { BREAKPOINTS, GRID_FRACTIONS } from 'constants/index'
import { items } from './constants'

const fractions = [
  '',
  ...GRID_FRACTIONS
]

const buildItemSizes = item => ({
  title: `Example item ${item} sizes (Breakpoints)`,
  foldable: true,
  foldableOpenOnMount: false,
  listType: 'matrix',
  options: BREAKPOINTS.map(bp => ({
    type: 'select',
    stateKey: `item${item}.sizes.${bp}`,
    label: `${bp}`,
    options: fractions.map(fraction => ({
      value: bp === 'all' ? fraction : `${fraction}@${bp}`,
      label: fraction || 'None'
    }))
  }))
})

const itemSizes = () =>
  items.map(i => buildItemSizes(i))

export default itemSizes
