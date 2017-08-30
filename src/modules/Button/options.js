const sizes = ['sm', 'md', 'lg']
const themes = ['alpha', 'beta']
const types = ['submit', 'reset', 'link', 'button']

const options = [{
  title: '',
  options: [
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
      stateKey: 'theme',
      label: 'Theme',
      options: themes.map(t => ({
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
