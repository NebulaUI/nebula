import { constants as nebulaConstants } from 'nebula-react'
import { BREAKPOINTS } from 'utils/constants'

const sizes = {
  '': 'None',
  ...nebulaConstants.SECTION_SIZES.reduce((acc, size) => {
    acc[size] = size
    return acc
  }, {})
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
    options: Object.keys(sizes).map(key => ({
      value: bp === 'all' ? key : `${key}@${bp}`,
      label: sizes[key]
    }))
  }))
}]

export default options
