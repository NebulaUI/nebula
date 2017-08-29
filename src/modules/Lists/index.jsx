import React from 'react'
import { Section, Foldable } from 'nebula-react'

import BareList from './BareList'
import InlineList from './InlineList'
import MatrixList from './MatrixList'
import UniformedList from './UniformedList'

const Lists = () => (
  <div>
    <h1>Lists</h1>
    <Foldable.Wrapper openOnMount bordered>
      <Foldable.Header padding>
        <h2>Bare List</h2>
      </Foldable.Header>
      <Foldable.Body>
        <Section size="md" node="div" className="u-hard-top">
          <BareList />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>Inline List</h2>
      </Foldable.Header>
      <Foldable.Body>
        <Section size="md" node="div" className="u-hard-top">
          <InlineList />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>Matrix List</h2>
      </Foldable.Header>
      <Foldable.Body>
        <Section size="md" node="div" className="u-hard-top">
          <MatrixList />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
    <Foldable.Wrapper>
      <Foldable.Header padding>
        <h2>Uniformed List</h2>
      </Foldable.Header>
      <Foldable.Body>
        <Section size="md" node="div" className="u-hard-top">
          <UniformedList />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
  </div>
)

export default Lists
