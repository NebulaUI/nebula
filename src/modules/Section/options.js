import { breakpoints } from 'utils/constants'

const sizes = {
  '': 'None',
  sm: 'Small',
  md: 'Medium'
}

const options = [{
  title: 'Section',
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
  options: breakpoints.map(bp => ({
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
