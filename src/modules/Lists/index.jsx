import React from 'react'
import { Section } from 'nebula-react'

import BareList from './BareList'
import InlineList from './InlineList'
import MatrixList from './MatrixList'

const Lists = () => (
  <div>
    <h1>Lists</h1>
    <Section size="md">
      <BareList />
    </Section>
    <Section size="md">
      <InlineList />
    </Section>
    <Section size="md">
      <MatrixList />
    </Section>
  </div>
)

export default Lists
