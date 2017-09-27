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
          label: 'Sm'
        },
        {
          value: 'md',
          label: 'Md'
        }
      ]
    }
  ]
}]

export default options
