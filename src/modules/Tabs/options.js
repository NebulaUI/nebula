const options = () => ([{
  title: '',
  options: [
    {
      type: 'checkbox',
      stateKey: 'controlled',
      label: 'Control tabs externally'
    },
    {
      type: 'checkbox',
      stateKey: 'spreadItems',
      label: 'Spread tab items evenly.'
    },
    {
      type: 'checkbox',
      stateKey: 'disabledTab',
      label: 'Disabled tabs.'
    }
  ]
}])

export default options
