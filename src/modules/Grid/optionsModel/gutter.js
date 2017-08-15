import { breakpoints } from './constants'

const gutterSizes = {
  '': 'None',
  sm: 'Small',
  md: 'Medium',
  lg: 'Large'
}

const gutter = {
  title: 'Gutters',
  options: breakpoints.map(bp => ({
    type: 'select',
    stateKey: `gutter.${bp}`,
    label: `${bp} screen sizes`,
    options: Object.keys(gutterSizes).map(key => ({
      value: bp === 'all' ? key : `${key}@${bp}`,
      label: gutterSizes[key]
    }))
  }))
}
export default gutter
