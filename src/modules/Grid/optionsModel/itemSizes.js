import { breakpoints } from 'utils/constants'
import { sizes, items } from './constants'

const buildItemSizes = item => ({
  title: `Item ${item} sizes (Breakpoints)`,
  listType: 'matrix',
  options: breakpoints.map(bp => ({
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
