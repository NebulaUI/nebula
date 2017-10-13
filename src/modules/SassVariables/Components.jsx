import React from 'react'
import { Card } from 'nebula-react'

import MarkdownContainer from 'components/MarkdownContainer'
import ComponentsMarkdown from './Components.md'

const Components = () => (
  <Card.Wrapper>
    <Card.Body>
      <MarkdownContainer source={ComponentsMarkdown} />
    </Card.Body>
  </Card.Wrapper>
)

export default Components
