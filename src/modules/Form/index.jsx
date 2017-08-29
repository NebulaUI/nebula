import React from 'react'
import { Section, Foldable } from 'nebula-react'

import Checkbox from './Checkbox'

const Form = () => (
  <div>
    <h1>Form</h1>
    <Foldable.Wrapper openOnMount bordered>
      <Foldable.Header padding>
        <h2>Checkbox</h2>
      </Foldable.Header>
      <Foldable.Body>
        <Section size="md" node="div" className="u-hard-top">
          <Checkbox />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
  </div>
)

export default Form
