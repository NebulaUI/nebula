const options = [{
  title: 'Generic',
  foldable: true,
  foldableOpenOnMount: false,
  options: [{
    type: 'checkbox',
    stateKey: 'sticky',
    label: 'Fix at the top of the viewport.'
  }, {
    type: 'checkbox',
    stateKey: 'reactRouter',
    label: 'React Router (v4) Integration.'
  }, {
    type: 'checkbox',
    stateKey: 'reverseSourceOrder',
    label: 'Reverse the source order of the Nav Items and Secondary content.'
  }]
}, {
  title: 'Logo',
  foldable: true,
  foldableOpenOnMount: false,
  options: [{
    type: 'checkbox',
    stateKey: 'logo.included',
    label: 'Include logo.'
  }, {
    type: 'radio',
    stateKey: 'logo.componentType',
    label: 'Logo component type.',
    options: [{
      value: 'image',
      label: 'Image'
    }, {
      value: 'text',
      label: 'Plain text'
    }]
  }]
}, {
  title: 'Nav Items',
  foldable: true,
  foldableOpenOnMount: false,
  options: [{
    type: 'checkbox',
    stateKey: 'navItems.included',
    label: 'Include.'
  }, {
    type: 'checkbox',
    stateKey: 'navItems.icon',
    label: 'Show Icon example'
  }, {
    type: 'checkbox',
    stateKey: 'navItems.right',
    label: 'Align nav items to the right (float right).'
  }, {
    type: 'radio',
    stateKey: 'navItems.dropdownAlignment',
    label: 'Dropdown alignment.',
    options: [{
      value: 'south-east',
      label: 'South East'
    }, {
      value: 'south-west',
      label: 'South West'
    }]
  }]
}, {
  title: 'Secondary Content',
  foldable: true,
  foldableOpenOnMount: false,
  options: [{
    type: 'checkbox',
    stateKey: 'secondaryContent.included',
    label: 'include.'
  }, {
    type: 'checkbox',
    stateKey: 'secondaryContent.right',
    label: 'Align secondary content to the right (float right).'
  }, {
    type: 'checkbox',
    stateKey: 'secondaryContent.keepAtTop',
    label: 'Keep secondary content at the top when collapsed (Small viewports).'
  }, {
    type: 'checkbox',
    stateKey: 'secondaryContent.resetLineHeight',
    label: 'Reset the line-height for secondary content.'
  }, {
    type: 'radio',
    stateKey: 'secondaryContent.componentType',
    label: 'Secondary content type.',
    options: [{
      value: 'button',
      label: 'Button'
    }, {
      value: 'text',
      label: 'Plain text'
    }, {
      value: 'searchForm',
      label: 'Search Form'
    }]
  }]
}]

export default options
