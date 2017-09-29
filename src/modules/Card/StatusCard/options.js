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
    },
    {
      type: 'checkbox',
      stateKey: 'showIcon',
      label: 'Show icon'
    }
  ]
}]

export default options
