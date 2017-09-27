import { BUTTON_SIZES, BUTTON_THEMES } from 'constants/index'
import { upperCaseFirst } from 'utils'

const types = ['submit', 'reset', 'link', 'button']

const options = [{
  title: '',
  options: [
    {
      type: 'radio',
      stateKey: 'buttonSize',
      label: 'Size',
      options: BUTTON_SIZES.map(s => ({
        value: s,
        label: s.toUpperCase()
      }))
    },
    {
      type: 'checkbox',
      stateKey: 'reactRouter',
      label: 'React Router (v4) Integration.'
    },
    {
      type: 'radio',
      stateKey: 'buttonTheme',
      label: 'Theme',
      options: BUTTON_THEMES.map(t => ({
        value: t,
        label: upperCaseFirst(t)
      }))
    },
    {
      type: 'radio',
      stateKey: 'buttonType',
      label: 'Type',
      options: types.map(t => ({
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
