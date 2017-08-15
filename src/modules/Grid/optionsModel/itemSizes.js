import { sizes, breakpoints, items } from './constants'

const buildItemSizes = item => ({
  title: `Grid Item ${item} sizes`,
  options: breakpoints.map(bp => ({
    type: 'select',
    stateKey: `item${item}.sizes.${bp}`,
    label: `${bp} screen sizes`,
    options: sizes.map(size => ({
      value: bp === 'all' ? size : `${size}@${bp}`,
      label: size || 'None'
    }))
  }))
})

const itemSizes = () =>
  items.map(i => buildItemSizes(i))

export default itemSizes
