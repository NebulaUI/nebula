const statuses = [
  'success',
  'info',
  'warning',
  'error'
]

const options = [{
  title: '',
  options: [
    {
      type: 'select',
      stateKey: 'status',
      label: 'Status',
      options: statuses.map(s => ({
        value: s,
        label: s
      }))
    }
  ]
}]

export default options
