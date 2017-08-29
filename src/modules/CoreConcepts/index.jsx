import React from 'react'
import T from 'prop-types'
import { Card } from 'nebula-react'

import MarkdownContainer from 'components/MarkdownContainer'

import source from './source.md'

const CoreConcepts = ({ children }) => (
  <article className="c-article">
    {
      children || <h1>Core Concepts</h1>
    }
    <Card>
      <MarkdownContainer source={source} />
    </Card>
  </article>
)

CoreConcepts.propTypes = {
  children: T.node
}

export default CoreConcepts
