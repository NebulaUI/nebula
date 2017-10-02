import { MAX_BREAKPOINTS } from 'constants/index'
import { upperCaseFirst } from 'utils'

const options = [{
  title: '',
  options: [
    {
      type: 'checkbox',
      stateKey: 'transition',
      label: 'Transition opening / closing.'
    },
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
      type: 'radio',
      stateKey: 'breakpoint',
      label: 'Breakpoint',
      options: MAX_BREAKPOINTS.map(bp => ({
        value: bp === 'all' ? '' : bp,
        label: bp === 'all' ? 'None' : upperCaseFirst(bp)
      }))
    }
  ]
}]

export default options
