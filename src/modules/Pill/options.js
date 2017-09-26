import { STATUSES } from 'constants/index'

const options = [{
  title: '',
  options: [
    {
      type: 'select',
      stateKey: 'status',
      label: 'Status',
      options: [...STATUSES, ''].map(s => ({
        value: s,
        label: !s ? 'None' : s
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
        label: s === 'RRLink' ? 'React Router link' : s
      }))
    }
  ]
}]

export default options
