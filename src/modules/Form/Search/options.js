const types = ['text', 'password', 'email', 'number', 'search', 'url']

const options = [{
  title: '',
  options: [
    {
      type: 'checkbox',
      stateKey: 'disabled',
      label: 'Disabled'
    },
    {
      type: 'checkbox',
      stateKey: 'small',
      label: 'Small'
    },
    {
      type: 'select',
      stateKey: 'type',
      label: 'Type',
      options: types.map(type => ({
        value: type,
        label: type
      }))
    }
  ]
}]

export default options
