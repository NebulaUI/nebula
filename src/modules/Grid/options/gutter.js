import { BREAKPOINTS, GRID_GUTTERS } from 'constants/index'

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
    options: GRID_GUTTERS.map(v => ({
      value: buildValue(v, bp),
      label: v
    }))
  }))
}
export default gutter
