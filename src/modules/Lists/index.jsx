import React from 'react'
import { Section } from 'nebula-react'

import BareList from '../BareList'
import InlineList from '../InlineList'
import MatrixList from '../MatrixList'

const Lists = () => (
  <div>
    <h1>Lists</h1>
    <Section>
      <BareList />
    </Section>
    <Section>
      <InlineList />
    </Section>
    <Section>
      <MatrixList />
    </Section>
  </div>
)

export default Lists
