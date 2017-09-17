import { BREAKPOINTS, SECTION_SIZES } from 'constants/index'

const buildSize = (space, bp) => {
  if (space === 'None') {
    return ''
  }

  return bp === 'all' ? space : `${space}@${bp}`
}

const options = [{
  title: '',
  options: [
    {
      type: 'checkbox',
      stateKey: 'nestCard',
      label: 'Wrap Section inside of a Card component'
    }
  ]
},
{
  title: 'Size (Breakpoints)',
  listType: 'matrix',
  options: BREAKPOINTS.map(bp => ({
    type: 'select',
    stateKey: `sizes.${bp}`,
    label: bp,
    options: SECTION_SIZES.map(s => ({
      value: buildSize(s, bp),
      label: s
    }))
  }))
}]

export default options
