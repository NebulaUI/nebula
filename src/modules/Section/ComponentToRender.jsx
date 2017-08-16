import React from 'react'
import T from 'prop-types'
import { Card, Section } from 'nebula-react'

import { removeFalsyProps as removeFalsy } from 'utils'

const ComponentToRender = ({ padding, nestCard }) => (
  nestCard ? (
    <Card>
      <Section
        {...removeFalsy({ padding })}
      >
        Hello Nebula.
      </Section>
    </Card>
  ) : (
    <Section
      {...removeFalsy({ padding })}
    >
      Hello Nebula.
    </Section>
  )
)

ComponentToRender.propTypes = {
  padding: T.bool.isRequired,
  nestCard: T.bool.isRequired
}

export default ComponentToRender
