import { STATUSES } from 'constants/index'

const options = [{
  title: '',
  options: [
    {
      type: 'select',
      stateKey: 'status',
      label: 'Status',
      options: STATUSES.map(s => ({
        value: s,
        label: s
      }))
    }
  ]
}]

export default options
