import { FLYOUT_DIRECTIONS } from 'constants/index'

const widths = ['None', '200px', '500px']

const options = [{
  title: '',
  options: [
    {
      type: 'radio',
      stateKey: 'direction',
      label: 'Direction',
      options: FLYOUT_DIRECTIONS.map(s => ({
        value: s,
        label: s.toUpperCase()
      }))
    },
    {
      type: 'checkbox',
      stateKey: 'transition',
      label: 'Transition open.'
    },
    {
      type: 'checkbox',
      stateKey: 'maxHeight',
      label: 'Maximum height.'
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
