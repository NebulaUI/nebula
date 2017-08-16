import { breakpoints } from 'utils/constants'

const gutterSizes = {
  '': 'None',
  sm: 'Small',
  md: 'Medium',
  lg: 'Large'
}

const gutter = {
  title: 'Gutter (Breakpoints)',
  listType: 'matrix',
  options: breakpoints.map(bp => ({
    type: 'select',
    stateKey: `gutter.${bp}`,
    label: bp,
    options: Object.keys(gutterSizes).map(key => ({
      value: bp === 'all' ? key : `${key}@${bp}`,
      label: gutterSizes[key]
    }))
  }))
}
export default gutter
