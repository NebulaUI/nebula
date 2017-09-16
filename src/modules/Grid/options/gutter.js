import { BREAKPOINTS } from 'constants/index'

const gutterSizes = {
  '': 'None',
  sm: 'Small',
  md: 'Medium',
  lg: 'Large'
}

const gutter = {
  title: 'Gutter (Breakpoints)',
  foldable: true,
  foldableOpenOnMount: false,
  listType: 'matrix',
  options: BREAKPOINTS.map(bp => ({
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
