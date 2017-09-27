
const modalWidths = ['Default', '200', '600', '800', '1000']

const options = [{
  title: '',
  options: [
    {
      type: 'checkbox',
      stateKey: 'timeout',
      label: '2 second timeout before closing.'
    },
    {
      type: 'checkbox',
      stateKey: 'clickOutsideDeactivates',
      label: 'Click outside deactivates.'
    },
    {
      type: 'checkbox',
      stateKey: 'closeButtonInContent',
      label: 'Close button in modal content.'
    },
    {
      type: 'checkbox',
      stateKey: 'alignTop',
      label: 'Align modal to the top.'
    },
    {
      type: 'radio',
      stateKey: 'width',
      label: 'Width of modal.',
      options: modalWidths.map(value => ({
        value,
        label: value === 'Default' ? value : `${value}px`
      }))
    }
  ]
}]

export default options
