import React from 'react'
import { Section, Foldable } from 'nebula-react'

import Generic from './Generic'
import Loading from './Loading'

const Icons = () => (
  <div>
    <h1>Icons</h1>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>Generic</h2>
      </Foldable.Header>
      <Foldable.Body>
        <Section size="md" tag="div" className="u-hard-top">
          <Generic />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>Loading</h2>
      </Foldable.Header>
      <Foldable.Body>
        <Section size="md" tag="div" className="u-hard-top">
          <Loading />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
  </div>
)

export default Icons
