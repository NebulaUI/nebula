import React from 'react'
import { Section, Foldable } from 'nebula-react'

import TextInput from './TextInput'
import Textarea from './Textarea'
import Checkbox from './Checkbox'
import Radio from './Radio'
import Select from './Select'

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
        <h2>Textarea</h2>
      </Foldable.Header>
      <Foldable.Body>
        <Section size="md" node="div" className="u-hard-top">
          <Textarea />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>Select</h2>
      </Foldable.Header>
      <Foldable.Body>
        <Section size="md" node="div" className="u-hard-top">
          <Select />
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
