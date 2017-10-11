import { BREAKPOINTS } from 'constants/index'

const options = [{
  title: '',
  options: [
    {
      type: 'checkbox',
      stateKey: 'hidden',
      label: 'Hidden'
    },
    {
      type: 'radio',
      stateKey: 'hiddenBreakpoint',
      label: 'Hidden at breakpoint (Mobile first).',
      options: BREAKPOINTS.filter(v => v !== 'all').map(bp => ({
        value: bp,
        label: bp
      }))
    },
    {
      type: 'radio',
      stateKey: 'hiddenBreakpointMax',
      label: 'Hidden at breakpoint (Desktop first).',
      options: BREAKPOINTS.filter(v => v !== 'all').map(bp => ({
        value: bp,
        label: `max-${bp}`
      }))
    }
  ]
}]

export default options
