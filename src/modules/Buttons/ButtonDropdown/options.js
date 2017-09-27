import { BUTTON_SIZES, BUTTON_THEMES } from 'constants/index'
import { upperCaseFirst } from 'utils'

const directions = ['left', 'right']

const options = [{
  title: '',
  options: [
    {
      type: 'checkbox',
      stateKey: 'controlled',
      label: 'Control ButtonDropdown externally (for demo purposes setting this option hides "click outside to close" option).'
    },
    {
      type: 'checkbox',
      stateKey: 'clickOutsideToClose',
      label: 'Click outside to close.'
    },
    {
      type: 'radio',
      stateKey: 'size',
      label: 'Size',
      options: BUTTON_SIZES.map(s => ({
        value: s,
        label: s.toUpperCase()
      }))
    },
    {
      type: 'radio',
      stateKey: 'direction',
      label: 'Direction',
      options: directions.map(t => ({
        value: t,
        label: upperCaseFirst(t)
      }))
    },
    {
      type: 'checkbox',
      stateKey: 'reactRouter',
      label: 'React Router (v4) Integration.'
    },
    {
      type: 'radio',
      stateKey: 'theme',
      label: 'Theme',
      options: BUTTON_THEMES.map(t => ({
        value: t,
        label: upperCaseFirst(t)
      }))
    },
    {
      type: 'checkbox',
      stateKey: 'fullWidth',
      label: 'Full width'
    },
    {
      type: 'checkbox',
      stateKey: 'disabled',
      label: 'Disabled'
    }
  ]
}]

export default options
