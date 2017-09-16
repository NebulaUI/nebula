import { BREAKPOINTS } from 'utils/constants'
import { sizes, items } from './constants'

const buildItemSizes = item => ({
  title: `Example item ${item} sizes (Breakpoints)`,
  foldable: true,
  foldableOpenOnMount: false,
  listType: 'matrix',
  options: BREAKPOINTS.map(bp => ({
    type: 'select',
    stateKey: `item${item}.sizes.${bp}`,
    label: `${bp}`,
    options: sizes.map(size => ({
      value: bp === 'all' ? size : `${size}@${bp}`,
      label: size || 'None'
    }))
  }))
})

const itemSizes = () =>
  items.map(i => buildItemSizes(i))

export default itemSizes
