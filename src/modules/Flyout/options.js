import { Flyout } from 'nebula-react'

const { DIRECTIONS } = Flyout.constants
const widths = ['None', '200px', '500px',]

const options = [{
  title: '',
  options: [
    {
      type: 'select',
      stateKey: 'direction',
      label: 'Direction',
      options: DIRECTIONS.map(s => ({
        value: s,
        label: s
      }))
    },
    {
      type: 'checkbox',
      stateKey: 'controlled',
      label: 'Control flyout externally (for demo purposes setting this option hides and disables "click outside to close" option).'
    },
    {
      type: 'checkbox',
      stateKey: 'clickOutsideToClose',
      label: 'Click outside to close.'
    },
    {
      type: 'radio',
      stateKey: 'width',
      label: 'Width',
      options: widths.map(s => ({
        value: s,
        label: s
      }))
    },
    {
      type: 'checkbox',
      stateKey: 'closeButtonInContent',
      label: 'Close button in content.'
    },
    {
      type: 'checkbox',
      stateKey: 'disabled',
      label: 'Flyout disabled.'
    }
  ]
}]

export default options
