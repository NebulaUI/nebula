import { STATUSES } from 'constants/index'
import { upperCaseFirst } from 'utils'

const options = [{
  title: '',
  options: [
    {
      type: 'radio',
      stateKey: 'status',
      label: 'Status',
      options: STATUSES.map(s => ({
        value: s,
        label: upperCaseFirst(s)
      }))
    }
  ]
}]

export default options
