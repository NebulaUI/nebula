const sizes = ['sm', 'md', 'lg']
const themes = ['alpha', 'beta']
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
      type: 'select',
      stateKey: 'size',
      label: 'Size',
      options: sizes.map(s => ({
        value: s,
        label: s
      }))
    },
    {
      type: 'select',
      stateKey: 'direction',
      label: 'Direction',
      options: directions.map(t => ({
        value: t,
        label: t
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
      options: themes.map(t => ({
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
