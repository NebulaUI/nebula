const text = [
  'none',
  'left',
  'right'
]

const options = [{
  title: '',
  options: [
    {
      type: 'select',
      stateKey: 'text',
      label: 'Text',
      options: text.map(s => ({
        value: s,
        label: s
      }))
    }
  ]
}]

export default options
