import generic from './generic'
import gutter from './gutter'
import itemSizes from './itemSizes'

const options = [
  generic,
  gutter,
  ...itemSizes()
]

export default options
