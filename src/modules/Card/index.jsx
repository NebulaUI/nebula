import React from 'react'
import { Section, Foldable } from 'nebula-react'

import Card from './Card'
import StatusCard from './StatusCard'

const Form = () => (
  <div>
    <h1>Form</h1>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>Card</h2>
      </Foldable.Header>
      <Foldable.Body>
        <Section size="md" tag="div" className="u-hard-top">
          <Card />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>Status Card</h2>
      </Foldable.Header>
      <Foldable.Body>
        <Section size="md" tag="div" className="u-hard-top">
          <StatusCard />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
  </div>
)

export default Form
