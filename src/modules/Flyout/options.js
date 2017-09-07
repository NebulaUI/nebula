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
      stateKey: 'closeButtonInContent',
      label: 'Close button in content'
    }
  ]
}]

export default options
