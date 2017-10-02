import React from 'react'
import { Section, Foldable } from 'nebula-react'

import UIList from './UIList'
import LinkList from './LinkList'

const Lists = () => (
  <div>
    <h1>Lists</h1>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>UI List</h2>
      </Foldable.Header>
      <Foldable.Body transition>
        <Section size="md" tag="div" className="u-hard-top">
          <UIList />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
    <Foldable.Wrapper>
      <Foldable.Header padding>
        <h2>Link List</h2>
      </Foldable.Header>
      <Foldable.Body transition>
        <Section size="md" tag="div" className="u-hard-top">
          <LinkList />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
  </div>
)

export default Lists
