const options = [{
  title: '',
  options: [
    {
      type: 'checkbox',
      stateKey: 'groupItems',
      label: 'Group items'
    },
    {
      type: 'radio',
      stateKey: 'spacing',
      label: 'Spacing',
      options: [
        {
          value: 'sm',
          label: 'sm'
        },
        {
          value: 'md',
          label: 'md'
        }
      ]
    }
  ]
}]

export default options
