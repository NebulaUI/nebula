import { BREAKPOINTS, GRID_FRACTIONS } from 'constants/index'

const buildValue = (v, bp) => {
  if (v === 'None') {
    return ''
  }

  return bp === 'all' ? v : `${v}@${bp}`
}
const options = [{
  title: '',
  listType: 'matrix',
  options: BREAKPOINTS.map(bp => ({
    type: 'select',
    stateKey: `widths.${bp}`,
    label: `${bp}`,
    options: GRID_FRACTIONS.map(fraction => ({
      value: buildValue(fraction, bp),
      label: fraction || 'None'
    }))
  }))
}]

export default options
