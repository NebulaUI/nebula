const generic = {
  title: 'Generic',
  foldable: true,
  foldableOpenOnMount: false,
  options: [
    {
      type: 'checkbox',
      stateKey: 'matrix',
      label: 'Matrix - vertical gutters mirroring horizontal'
    },
    {
      type: 'checkbox',
      stateKey: 'equalHeight',
      label: 'Equal height items'
    },
    {
      type: 'checkbox',
      stateKey: 'reverse',
      label: 'Reverse horizontal ordering'
    },
    {
      type: 'checkbox',
      stateKey: 'cardInItems',
      label: 'Nest Card Component inside of Grid Items'
    },
    {
      type: 'radio',
      stateKey: 'align',
      label: 'Vertical alignment of Grid Items',
      options: [
        {
          value: '',
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
    }
  ]
}

export default generic
