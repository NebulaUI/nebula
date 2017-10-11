import React from 'react'
import { Section, Foldable } from 'nebula-react'

import Push from './Push'

const Lists = () => (
  <div>
    <h1>Utility Classes</h1>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>Push / Flush (Margins)</h2>
      </Foldable.Header>
      <Foldable.Body transition>
        <Section size="md" tag="div" className="u-hard-top">
          <Push />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
  </div>
)

export default Lists
