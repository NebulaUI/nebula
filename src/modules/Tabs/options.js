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
      stateKey: 'disabledTab',
      label: 'Disabled tab.'
    }
  ]
}])

export default options
