import generic from './generic'
import gutter from './gutter'
import itemSizes from './itemSizes'

const optionsModel = [
  generic,
  gutter,
  ...itemSizes()
]

export default optionsModel
