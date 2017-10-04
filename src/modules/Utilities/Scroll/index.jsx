import React from 'react'

import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'

const ScrollExample = () => (
  <Example
    title=""
    description={description}
    config={{
      type: 'Scroll',
      nebulaImportOverride: 'Card, Scroll'
    }}
    ComponentToRender={ComponentToRender()}
  />
)

export default ScrollExample
