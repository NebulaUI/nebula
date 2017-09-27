import { STATUSES } from 'constants/index'
import { upperCaseFirst } from 'utils'

const options = [{
  title: '',
  options: [
    {
      type: 'radio',
      stateKey: 'status',
      label: 'Status',
      options: [...STATUSES, ''].map(s => ({
        value: s,
        label: !s ? 'None' : upperCaseFirst(s)
      }))
    },
    {
      type: 'checkbox',
      stateKey: 'isActive',
      label: 'Active state'
    },
    {
      type: 'radio',
      stateKey: 'renderAs',
      label: 'Render as',
      options: ['div', 'button', 'RRLink'].map(s => ({
        value: s,
        label: s === 'RRLink' ? 'React Router link' : upperCaseFirst(s)
      }))
    }
  ]
}]

export default options
