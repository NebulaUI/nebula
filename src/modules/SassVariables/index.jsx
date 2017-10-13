import React from 'react'
import { Section, Foldable } from 'nebula-react'

import CSS from './CSS'

const SassVariables = () => (
  <div>
    <h1>Global Sass Variables</h1>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>Nebula CSS</h2>
      </Foldable.Header>
      <Foldable.Body transition>
        <Section size="md" tag="div" className="u-hard-top">
          <CSS />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
  </div>
)

export default SassVariables
