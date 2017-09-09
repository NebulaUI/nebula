const directions = ['nw', 'ne', 'sw', 'se']

const options = [{
  title: '',
  options: [
    {
      type: 'select',
      stateKey: 'direction',
      label: 'Direction',
      options: directions.map(s => ({
        value: s,
        label: s
      }))
    },
    {
      type: 'checkbox',
      stateKey: 'controlled',
      label: 'Control flyout externally (for demo purposes setting this option hides "click outside to close" option).'
    },
    {
      type: 'checkbox',
      stateKey: 'clickOutsideToClose',
      label: 'Click outside to close.'
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
