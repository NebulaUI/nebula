import React from 'react'
import { Section, Foldable } from 'nebula-react'

import FontSize from './FontSize'
import Hidden from './Hidden'
import Push from './Push'
import Soft from './Soft'
import TextAlign from './TextAlign'
import Width from './Width'

const Lists = () => (
  <div>
    <h1>Utility Classes</h1>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>Font Size</h2>
      </Foldable.Header>
      <Foldable.Body transition>
        <Section size="md" tag="div" className="u-hard-top">
          <FontSize />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>Hidden</h2>
      </Foldable.Header>
      <Foldable.Body transition>
        <Section size="md" tag="div" className="u-hard-top">
          <Hidden />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>Push / Flush (Margins)</h2>
      </Foldable.Header>
      <Foldable.Body transition>
        <Section size="md" tag="div" className="u-hard-top">
          <Push />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>Soft / Hard (Padding)</h2>
      </Foldable.Header>
      <Foldable.Body transition>
        <Section size="md" tag="div" className="u-hard-top">
          <Soft />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>Text Align</h2>
      </Foldable.Header>
      <Foldable.Body transition>
        <Section size="md" tag="div" className="u-hard-top">
          <TextAlign />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
    <Foldable.Wrapper bordered>
      <Foldable.Header padding>
        <h2>Width</h2>
      </Foldable.Header>
      <Foldable.Body transition>
        <Section size="md" tag="div" className="u-hard-top">
          <Width />
        </Section>
      </Foldable.Body>
    </Foldable.Wrapper>
  </div>
)

export default Lists
