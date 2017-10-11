import { BREAKPOINTS } from 'constants/index'

const options = [{
  title: '',
  options: [
    {
      type: 'radio',
      stateKey: 'PLbreakpoint',
      label: 'Push Left Breakpoint',
      options: BREAKPOINTS.map(bp => ({
        value: bp,
        label: bp
      }))
    },
    {
      type: 'radio',
      stateKey: 'PBbreakpoint',
      label: 'Push Bottom Breakpoint',
      options: BREAKPOINTS.map(bp => ({
        value: bp,
        label: bp
      }))
    }
  ]
}]

export default options
