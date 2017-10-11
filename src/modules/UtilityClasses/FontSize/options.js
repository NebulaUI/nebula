const FONT_KEYS = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']

const options = [{
  title: '',
  options: [
    {
      type: 'radio',
      stateKey: 'fontSize',
      label: 'Font size',
      options: FONT_KEYS.map(k => ({
        value: k,
        label: k
      }))
    }
  ]
}]

export default options
