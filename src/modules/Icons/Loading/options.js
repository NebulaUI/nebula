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
  '#8bc34a',
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
      type: 'select',
      stateKey: 'text',
      label: 'Text',
      options: text.map(s => ({
        value: s,
        label: s
      }))
    },
    {
      type: 'select',
      stateKey: 'fill',
      label: 'Fill',
      options: fillColors.map(s => ({
        value: s,
        label: s
      }))
    },
    {
      type: 'select',
      stateKey: 'size',
      label: 'Size',
      options: sizes.map(s => ({
        value: s,
        label: s
      }))
    },
    {
      type: 'select',
      stateKey: 'verticalAlign',
      label: 'Vertical Align',
      options: verticalAlign.map(s => ({
        value: s,
        label: s
      }))
    }
  ]
}]

export default options
