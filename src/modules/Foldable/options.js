import { breakpoints } from 'utils/constants'

const options = [{
  title: '',
  options: [
    {
      type: 'checkbox',
      stateKey: 'controlled',
      label: 'Externally controlled.'
    },
    {
      type: 'checkbox',
      stateKey: 'headerPadding',
      label: 'Padding around Header.'
    },
    {
      type: 'checkbox',
      stateKey: 'bordered',
      label: 'Borders between foldable Components.'
    },
    {
      type: 'checkbox',
      stateKey: 'disabled',
      label: 'Disabled.'
    },
    {
      type: 'checkbox',
      stateKey: 'cardInBody',
      label: 'Nest Card component inside foldable body.'
    },
    {
      type: 'checkbox',
      stateKey: 'cardWrapping',
      label: 'Wrap Card around all foldable components..'
    },
    {
      type: 'select',
      stateKey: 'breakpoint',
      label: 'Breakpoint',
      options: breakpoints.map(bp => ({
        value: bp === 'all' ? bp : `max-${bp}`,
        label: bp === 'all' ? bp : `max ${bp}`
      }))
    }
  ]
}]

export default options
