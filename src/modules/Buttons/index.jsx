import React from 'react'
import { Section, Foldable } from 'nebula-react'

import Button from './Button'
import ButtonDropdown from './ButtonDropdown'

const Lists = () => (
  <div>
    <h1>Buttons</h1>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>Button</h2>
      </Foldable.Header>
      <Foldable.Body transition>
        <Section size="md" tag="div" className="u-hard-top">
          <Button />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>Button Dropdown</h2>
      </Foldable.Header>
      <Foldable.Body transition>
        <Section size="md" tag="div" className="u-hard-top">
          <ButtonDropdown />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
  </div>
)

export default Lists
