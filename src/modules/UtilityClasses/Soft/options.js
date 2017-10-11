import { BREAKPOINTS } from 'constants/index'

const options = [{
  title: '',
  options: [
    {
      type: 'radio',
      stateKey: 'Sbreakpoint',
      label: 'Soft Breakpoint',
      options: BREAKPOINTS.map(bp => ({
        value: bp,
        label: bp
      }))
    },
    {
      type: 'radio',
      stateKey: 'STbreakpoint',
      label: 'Soft Top Breakpoint',
      options: BREAKPOINTS.map(bp => ({
        value: bp,
        label: bp
      }))
    },
    {
      type: 'radio',
      stateKey: 'SRbreakpoint',
      label: 'Soft Right Breakpoint',
      options: BREAKPOINTS.map(bp => ({
        value: bp,
        label: bp
      }))
    },
    {
      type: 'radio',
      stateKey: 'SBbreakpoint',
      label: 'Soft Bottom Breakpoint',
      options: BREAKPOINTS.map(bp => ({
        value: bp,
        label: bp
      }))
    },
    {
      type: 'radio',
      stateKey: 'SLbreakpoint',
      label: 'Soft Left Breakpoint',
      options: BREAKPOINTS.map(bp => ({
        value: bp,
        label: bp
      }))
    }
  ]
}]

export default options
