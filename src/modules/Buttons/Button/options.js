import { BUTTON_SIZES, BUTTON_THEMES } from 'constants/index'

const types = ['submit', 'reset', 'link', 'button']

const options = [{
  title: '',
  options: [
    {
      type: 'select',
      stateKey: 'size',
      label: 'Size',
      options: BUTTON_SIZES.map(s => ({
        value: s,
        label: s
      }))
    },
    {
      type: 'checkbox',
      stateKey: 'reactRouter',
      label: 'React Router (v4) Integration.'
    },
    {
      type: 'select',
      stateKey: 'theme',
      label: 'Theme',
      options: BUTTON_THEMES.map(t => ({
        value: t,
        label: t
      }))
    },
    {
      type: 'select',
      stateKey: 'type',
      label: 'Type',
      options: types.map(t => ({
        value: t,
        label: t
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
