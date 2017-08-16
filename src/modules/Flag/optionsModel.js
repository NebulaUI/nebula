import { breakpoints } from 'utils/constants'

const optionsModel = [{
  title: 'Flag',
  options: [
    {
      type: 'checkbox',
      stateKey: 'reverse',
      label: 'Reverse.'
    },
    {
      type: 'checkbox',
      stateKey: 'gutter',
      label: 'gutter'
    },
    {
      type: 'checkbox',
      stateKey: 'nowrap',
      label: 'Prevent content wrapping in Flag Component.'
    },
    {
      type: 'checkbox',
      stateKey: 'wrapInCard',
      label: 'Wrap Flag in Card component.'
    },
    {
      type: 'radio',
      stateKey: 'align',
      label: 'Select alignment.',
      options: [
        {
          value: 'top',
          label: 'Top'
        },
        {
          value: 'center',
          label: 'Center'
        },
        {
          value: 'bottom',
          label: 'Bottom'
        }
      ]
    },
    {
      type: 'select',
      stateKey: 'breakpoint',
      label: 'Select breakpoint.',
      options: breakpoints.map(bp => ({
        value: bp,
        label: bp === 'all' ? 'None' : bp
      }))
    },
    {
      type: 'radio',
      stateKey: 'componentContentType',
      label: 'Select Flag-Component content type.',
      options: [
        {
          value: 'image',
          label: 'Image'
        },
        {
          value: 'text',
          label: 'Text'
        },
        {
          value: 'button',
          label: 'Button'
        }
      ]
    },
    {
      type: 'radio',
      stateKey: 'bodyContentType',
      label: 'Select Flag Body content type.',
      options: [
        {
          value: 'text',
          label: 'Text'
        },
        {
          value: 'input',
          label: 'Text Input'
        }
      ]
    }
  ]
}]

export default optionsModel
