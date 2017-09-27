import { upperCaseFirst } from 'utils'

const text = [
  'none',
  'left',
  'right'
]

const sizes = ['30px', '50px', '100px', '150px']

const fillColors = [
  'red',
  'green',
  'currentColor',
  'none'
]

const verticalAlign = [
  'middle',
  'top',
  'bottom',
  'sub',
  'none'
]

const options = [{
  title: '',
  options: [
    {
      type: 'radio',
      stateKey: 'text',
      label: 'Text',
      options: text.map(s => ({
        value: s,
        label: upperCaseFirst(s)
      }))
    },
    {
      type: 'radio',
      stateKey: 'fill',
      label: 'Fill',
      options: fillColors.map(s => ({
        value: s,
        label: upperCaseFirst(s)
      }))
    },
    {
      type: 'radio',
      stateKey: 'size',
      label: 'Size',
      options: sizes.map(s => ({
        value: s,
        label: s
      }))
    },
    {
      type: 'radio',
      stateKey: 'verticalAlign',
      label: 'Vertical Align',
      options: verticalAlign.map(s => ({
        value: s,
        label: upperCaseFirst(s)
      }))
    }
  ]
}]

export default options
