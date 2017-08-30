import React from 'react'
import { Section, Foldable } from 'nebula-react'

import TextInput from './TextInput'
import Checkbox from './Checkbox'
import Radio from './Radio'

const Form = () => (
  <div>
    <h1>Form</h1>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>Text Input</h2>
      </Foldable.Header>
      <Foldable.Body>
        <Section size="md" node="div" className="u-hard-top">
          <TextInput />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>Checkbox</h2>
      </Foldable.Header>
      <Foldable.Body>
        <Section size="md" node="div" className="u-hard-top">
          <Checkbox />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>Radio</h2>
      </Foldable.Header>
      <Foldable.Body>
        <Section size="md" node="div" className="u-hard-top">
          <Radio />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
  </div>
)

export default Form
