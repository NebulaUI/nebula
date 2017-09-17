import { BREAKPOINTS, FLAG_ALIGNMENT } from 'constants/index'
import { upperCaseFirst } from '../../utils'

const options = [{
  title: '',
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
      options: FLAG_ALIGNMENT.map(v => ({
        value: v,
        label: v === 'default' ? 'Default (Center)' : upperCaseFirst(v)
      }))
    },
    {
      type: 'select',
      stateKey: 'breakpoint',
      label: 'Select breakpoint.',
      options: BREAKPOINTS.map(bp => ({
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

export default options
