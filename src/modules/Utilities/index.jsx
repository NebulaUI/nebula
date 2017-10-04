import React from 'react'
import { Section, Foldable } from 'nebula-react'

import FadeIn from './FadeIn'
import Scroll from './Scroll'

const Form = () => (
  <div>
    <h1>Utilities</h1>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>FadeIn</h2>
      </Foldable.Header>
      <Foldable.Body transition>
        <Section size="md" tag="div" className="u-hard-top">
          <FadeIn />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>Scroll</h2>
      </Foldable.Header>
      <Foldable.Body transition>
        <Section size="md" tag="div" className="u-hard-top">
          <Scroll />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
  </div>
)

export default Form
