import React from 'react'
import { Section, Foldable } from 'nebula-react'

import UIList from './UIList'

const Lists = () => (
  <div>
    <h1>Lists</h1>
    <Foldable.Wrapper>
      <Foldable.Header padding>
        <h2>UI List</h2>
      </Foldable.Header>
      <Foldable.Body>
        <Section size="md" tag="div" className="u-hard-top">
          <UIList />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
  </div>
)

export default Lists
