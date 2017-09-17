import { BREAKPOINTS, GRID_GUTTERS } from 'constants/index'

const gutterSizes = [
  'None',
  ...GRID_GUTTERS
]

const buildValue = (v, bp) => {
  if (v === 'None') {
    return ''
  }

  return bp === 'all' ? v : `${v}@${bp}`
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
    options: gutterSizes.map(v => ({
      value: buildValue(v, bp),
      label: v
    }))
  }))
}
export default gutter
