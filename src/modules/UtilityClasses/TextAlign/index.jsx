import React from 'react'

import Example from 'components/ComponentExample/Example'

import description from './description.md'
import ComponentToRender from './ComponentToRender'


const TextAlignExample = () => (
  <Example
    title=""
    description={description}
    config={{
      type: 'TextAlign',
      nebulaImportOverride: 'Card'
    }}
    ComponentToRender={ComponentToRender()}
  />
)

export default TextAlignExample
