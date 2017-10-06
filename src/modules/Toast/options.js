import { TOAST_POSITIONS } from 'constants/index'
import { upperCaseFirst } from 'utils'

const options = [{
  title: '',
  options: [
    {
      type: 'radio',
      stateKey: 'position',
      label: 'Position',
      options: TOAST_POSITIONS.map(t => ({
        value: t,
        label: t.toUpperCase()
      }))
    }
  ]
}]

export default options
