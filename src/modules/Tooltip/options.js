import { TOOLTIP_DIRECTIONS } from 'constants/index'
import { upperCaseFirst } from 'utils'

const options = [{
  title: '',
  options: [
    {
      type: 'radio',
      stateKey: 'direction',
      options: TOOLTIP_DIRECTIONS.map(t => ({
        value: t,
        label: upperCaseFirst(t)
      }))
    }
  ]
}]

export default options
