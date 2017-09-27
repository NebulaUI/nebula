const PERCENTAGES = ['0', '25', '50', '75', '100']

const options = [{
  title: '',
  options: [
    {
      type: 'checkbox',
      stateKey: 'animated',
      label: 'Animated'
    },
    {
      type: 'select',
      stateKey: 'percentage',
      label: 'Percentage',
      options: PERCENTAGES.map(p => ({
        value: p,
        label: `${p}%`
      }))
    }
  ]
}]

export default options
