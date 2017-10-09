import React from 'react'
import T from 'prop-types'
import { Card, Section, SiteWrap } from 'nebula-react'

import MarkdownContainer from 'components/MarkdownContainer'

import source from './source.md'

const CoreConcepts = ({ children }) => (
  <Section size="md">
    <SiteWrap padding>
      <article className="c-article">
        {
          children || <h1>Core Concepts</h1>
        }
        <Card.Wrapper>
          <Card.Body>
            <MarkdownContainer source={source} />
          </Card.Body>
        </Card.Wrapper>
      </article>
    </SiteWrap>
  </Section>
)

CoreConcepts.propTypes = {
  children: T.node
}

export default CoreConcepts
