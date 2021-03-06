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
      type: 'checkbox',
      stateKey: 'label',
      label: 'Show Label'
    },
    {
      type: 'checkbox',
      stateKey: 'decompose',
      label: 'Decompose components'
    },
    {
      type: 'radio',
      stateKey: 'submitPosition',
      label: 'Submit position.',
      options: [
        {
          value: 'left',
          label: 'Left'
        }, {
          value: 'right',
          label: 'Right'
        }
      ]
    }
  ]
}]

export default options
